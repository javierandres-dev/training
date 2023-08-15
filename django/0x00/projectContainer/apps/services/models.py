from django.db import models


# Create your models here.
class Service(models.Model):
    title = models.CharField(max_length=40)
    content = models.CharField(max_length=80)
    image = models.ImageField(upload_to="services")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "servicio"
        verbose_name_plural = "servicios"

    def __str__(self):
        return self.title
