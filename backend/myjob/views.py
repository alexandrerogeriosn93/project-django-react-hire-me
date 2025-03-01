from django.shortcuts import render
from myjob.models import Professional
from myjob.serializer import ProfessionalSerializer
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_200_OK


class ProfessionalAPI(APIView):
    def get(self, request, format=None):
        professionals = Professional.objects.all()
        serializer = ProfessionalSerializer(professionals, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
