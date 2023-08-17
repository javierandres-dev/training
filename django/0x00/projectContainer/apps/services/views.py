from django.shortcuts import render
from apps.services.models import Service


# Create your views here.
def home(request):
    services = Service.objects.all()
    return render(request, "services/index.html", {"services": services})
