from django.shortcuts import render, HttpResponse
from apps.services.models import Service


# Create your views here.
def home(request):
    return render(request, "web/home.html")


def services(request):
    services = Service.objects.all()
    return render(request, "web/services.html", {"services": services})


def shop(request):
    return render(request, "web/shop.html")


def blog(request):
    return render(request, "web/blog.html")


def contact(request):
    return render(request, "web/contact.html")
