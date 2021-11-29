from django.urls import path
from .views import MapelDetail, MapelList


urlpatterns = [
    path('', MapelList.as_view()),
    path('<str:pk>/', MapelDetail.as_view()),
]