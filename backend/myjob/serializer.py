from myjob.models import Professional
from rest_framework import serializers


class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        fields = "__all__"
