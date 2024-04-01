# Create your views here.
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.views.decorators.cache import never_cache
from .models import students
from .forms import insert_Form
from login.models import Student

# views.py
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.forms import AuthenticationForm
from rest_framework.permissions import AllowAny
from .serializers import LoginSerializer

from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Student, Department, Class

fac=""
dep=""
cla=""
cou=""

def initial(fact,dept):
    global fac,dep
    fac=fact
    dep=dept
    return

def tial(clat,cout):
    global cla,cou
    cla=clat
    cou=cout
    return


@api_view(['GET'])
def user_data_view(request):
    print(fac)
    print(dep)
    # Fetch the user data based on the authenticated user
    student = get_object_or_404(Student, stud_id=fac)
    dept_name = student.dept_id.dept_name
    class_name = student.class_id.class_id

    user_data = {
        "name": f"{student.f_name} {student.l_name}",
        "department": dept_name,
        "class": class_name,
    }

    return Response(user_data)




@api_view(['POST'])
@permission_classes([AllowAny])
@ensure_csrf_cookie
def login_view(request):
    if request.method == 'POST':
        print("hello")  # Print "hello" when the POST request is received

        # Your existing code to handle the POST request
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data.get('username')
            password = serializer.validated_data.get('password')
            user_type = serializer.validated_data.get('user_type')
            std=Student.objects.filter(stud_id=username)

            if std.exists():
                print("user exists")
                if std.get().s_password==password:
                     d=std.get().dept_id.dept_id
                     initial(username,d)
                     return Response({'redirect_url':'http://localhost:3000/home/'})
                else:
                    return Response({'message':'invalid credentials'},status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'message':'invalid credentials'},status=status.HTTP_400_BAD_REQUEST)
                    

            

            # Rest of your code...
            # ...

        return Response(status=status.HTTP_200_OK)

def login_view1(request):
    # Handle user login logic here
    serializer=LoginSerializer(data=request.data)
    if serializer.is_valid():
        username=serializer.validated_data.get('username')
        password=serializer.validated_data.get('password')
        usertype=serializer.validated_data.get('user_type')

        if usertype=='faculty':
            user = authenticate(request, username=username, password=password)
            if user is not None and user.is_staff:
                login(request,user)
                print('faculty authenticated')
                return Response({'redirect_url':'http://localhost:3000/faculty_home/'})
            else:
                return Response({'message':'invalid credentials'},status=status.HTTP_400_BAD_REQUEST)
            
        elif usertype=='student':
            user=authenticate(request,username=username,password=password)
            if user is not None and not user.is_staff:
                login(request,user)
                print('student authenticated')
                return Response({'redirect_url':'http://localhost:3000/home/'})
            else:
                return Response({'message':'Invalid credentials'},status=status.HTTP_400_BAD_REQUEST)
                
    return Response(status=status.HTTP_200_OK)


def home_view(request):
    try:
        username=request.GET.get('variable')
        student_data=students.objects.get(name=username)
        return render(request,'student.html',{'student_data':student_data})
    except students.DoesNotExist:
        # Handle the case when the student with the given username is not found
        return redirect('login')

def fhome_view(request):
    return render(request,'faculty.html')

def authlogout(request):
    return redirect('login')

def insert_data(request):
    if request.method == 'POST':
        frm=insert_Form(request.POST)
        if frm.is_valid():
            frm.save()
    frm=insert_Form()
    return render(request,'create.html',{'frm':frm})