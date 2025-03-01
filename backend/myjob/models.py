from django.db import models


class Professional(models.Model):
    name = models.CharField(max_length=80, null=False, blank=False)
    photo = models.URLField(max_length=225, null=False, blank=False)
    value_per_hour = models.DecimalField(
        max_digits=9, decimal_places=2, null=False, blank=False
    )
    description = models.TextField(null=False, blank=False)
