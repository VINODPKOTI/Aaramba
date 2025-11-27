from django import contrib
from django.shortcuts import render
from productmanagement.models import Banner, Products, ImageGallery
from categorymanagement.models import Category, SubCategory
import uuid
from django.views.decorators.cache import never_cache

@never_cache
def home(request):
    products = Products.objects.all().order_by('id')
    images = ImageGallery.objects.all()
    sub_categories = SubCategory.objects.all()
    banners = Banner.objects.all()
    context = {
        'products': products,
        'images' : images,
        'sub_categories' : sub_categories,
        'banners' : banners
    }
    return render(request,'user/home.html', context)


