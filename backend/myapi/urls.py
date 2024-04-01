from django.urls import path
from . import views
from login.views import login_view
from login.views import user_data_view

urlpatterns = [
    path('hello-world/', views.hello_world, name='hello_world'),
    path('login/',login_view, name='login_view'),
    path('user-data/', user_data_view, name="user-data"),
]