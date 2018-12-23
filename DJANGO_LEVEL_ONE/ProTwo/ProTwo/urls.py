from django.contrib import admin
from django.urls import path, include
from appTwo import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('users/', include('appTwo.urls'), name='users')
]
