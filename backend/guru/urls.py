from django.urls import path
from .views import GuruList, RegisterView



urlpatterns = [
    path('', GuruList.as_view()),
    path('register/', RegisterView.as_view()),
]