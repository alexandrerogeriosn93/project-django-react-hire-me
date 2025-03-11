from django.shortcuts import get_object_or_404, render
from myjob.models import Job, Professional
from myjob.serializer import (
    JobSerializer,
    ProfessionalSerializer,
    RegisterJobSerializer,
)
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST


class ProfessionalAPI(APIView):
    def get(self, request, format=None):
        professionals = Professional.objects.all()
        serializer = ProfessionalSerializer(professionals, many=True)
        return Response(serializer.data, status=HTTP_200_OK)


class RegisterJobAPI(APIView):
    def post(self, request, id, format=None):
        professional = get_object_or_404(Professional, id=id)
        seralizer = RegisterJobSerializer(data=request.data)

        if not seralizer.is_valid():
            return Response(seralizer.errors, status=HTTP_400_BAD_REQUEST)

        job = Job(
            name=seralizer.validated_data.get("name"),
            email=seralizer.validated_data.get("email"),
            professional=professional,
        )
        job.save()
        job_serializer = JobSerializer(job, many=False)

        return Response(job_serializer.data, status=HTTP_201_CREATED)
