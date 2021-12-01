from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    # TokenObtainPairView,
    TokenRefreshView,
)
from .tokens import CustomTokenObtainPairView
from os import name
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title = "SMK Jabadeka API",
        default_version = "alpha",
        description = "API for SMK Jabadeka Apps",
        term_of_service = "https://www.google.com/policies/terms/",
        contact = openapi.Contact(email="fahrury_rdd27@apps.ipb.ac.id"),
        license = openapi.License(name="BSD License"),
    ),
    public = True,
    permission_classes = (permissions.AllowAny, )
)

# custom admin site
admin.site.site_header = "SMK Jabadeka Admin"
admin.site.site_title = "SMK Jabadeka Admin Site"
admin.site.index_title = "SMK Jabadeka Admin"



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('guru.urls')),
    path('profil/', include('profil.urls')),
    path('mapel/', include('mapel.urls')),
    path('berita/', include('berita.urls')),
    path('pengumuman/', include('pengumuman.urls')),
    path('galeri/', include('galeri.urls')),
    path('login/token/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('swagger/', schema_view.with_ui(
        'swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui(
        'redoc', cache_timeout=0), name='schema-redoc'),
]
