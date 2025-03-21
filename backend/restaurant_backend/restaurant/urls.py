from django.urls import path
from .views import welcome_api

urlpatterns = [
    path('api/welcome/', welcome_api, name='welcome-api'),
]