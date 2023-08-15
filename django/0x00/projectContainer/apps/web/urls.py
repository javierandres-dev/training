from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from apps.web import views

app_name = "web"
urlpatterns = [
    path("", views.home, name="home"),
    path("servicios/", views.services, name="services"),
    path("tienda/", views.shop, name="shop"),
    path("blog/", views.blog, name="blog"),
    path("contacto/", views.contact, name="contact"),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
