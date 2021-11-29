from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('guru.urls')),
    path('profil/', include('profil.urls')),
    path('mapel/', include('mapel.urls')),
    path('berita/', include('berita.urls')),
    path('pengumuman/', include('pengumuman.urls')),
    path('login/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
