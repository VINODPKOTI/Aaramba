# warranty/forms.py
from django import forms
from .models import Warranty
from cart.models import Order
from productmanagement.models import Products
from useraccount.models import Accounts

class WarrantyForm(forms.ModelForm):
    order = forms.ModelChoiceField(queryset=Order.objects.all(), label="Order ID")
    product = forms.ModelChoiceField(queryset=Products.objects.all(), label="Product")
    user=forms.ModelChoiceField(queryset=Accounts.objects.all(),label='User')
    class Meta:
        model = Warranty
        fields = ['user','order', 'product', 'start_date', 'end_date']