from django.urls import path
from apps.web import views

app_name = "web"
urlpatterns = [
    path("", views.home),
    path("servicios/", views.services),
    path("tienda/", views.shop),
    path("blog/", views.blog),
    path("contacto/", views.contact),
]
