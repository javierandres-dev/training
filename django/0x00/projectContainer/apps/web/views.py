from django.shortcuts import render, HttpResponse


# Create your views here.
def home(request):
    return render(request, "web/index.html")


def shop(request):
    return render(request, "web/shop.html")


def blog(request):
    return render(request, "web/blog.html")


def contact(request):
    return render(request, "web/contact.html")
