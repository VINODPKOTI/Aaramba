# warranty/urls.py
from django.urls import path
from .views import add_warranty, validate_warranty,list_warranties,delete_warranty

urlpatterns = [
    path('add/', add_warranty, name='add_warranty'),
    path('validate/<int:pk>/', validate_warranty, name='validate_warranty'),
    path('list/', list_warranties, name='view_warranty'),
    path('delete/<int:pk>/', delete_warranty, name='delete_warranty'),
]
