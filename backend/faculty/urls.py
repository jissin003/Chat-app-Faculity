from django.contrib import admin
from django.urls import path,include
from .views import fac_login

urlpatterns = [
    path('fac_login/', fac_login, name="user-fac_login"),
]