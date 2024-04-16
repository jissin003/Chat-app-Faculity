from django.contrib import admin
from django.urls import path,include
from .views import fac_login,fac_data_view,get_lab_details,get_attendance_data,get_student_names,save_course_diary

urlpatterns = [
    path('fac_login/', fac_login, name="user-fac_login"),
    path('fac_data_get/', fac_data_view, name="fac_data_view"),
    path('get_lab_details/', get_lab_details, name="get_lab_details"),
    path('get_attendance_data/', get_attendance_data, name="get_attendance_data"),
    path('get_student_names/', get_student_names, name="get_student_names"),
    path('save_course_diary/', save_course_diary, name="save_course_diary"),
    
]