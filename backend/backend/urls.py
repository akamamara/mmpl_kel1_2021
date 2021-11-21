from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('guru/', include('guru.urls')),
    path('profil/', include('profil.urls')),
]