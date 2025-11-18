# warranty/models.py
from django.db import models
from django.utils import timezone
from productmanagement.models import Products
from useraccount.models import Accounts
from cart.models import Order

class Warranty(models.Model):
    product = models.ForeignKey(Products, on_delete=models.CASCADE)
    user = models.ForeignKey(Accounts, on_delete=models.CASCADE, blank=True, null=True)
    order = models.ForeignKey(Order, on_delete=models.CASCADE,blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField()

    def is_valid(self):
        today = timezone.now().date()
        return self.start_date <= today <= self.end_date

    def __str__(self):
        return f"Warranty for{self.order.order_id} {self.product.product_name} (owned by {self.user.username}) from {self.start_date} to {self.end_date}"

