# warranty/views.py
from django.shortcuts import render, get_object_or_404, redirect
from .models import Warranty
from .forms import WarrantyForm

# warranty/views.py
# warranty/views.py
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from .forms import WarrantyForm

@login_required
def add_warranty(request):
    """View to add a new warranty."""
    if request.method == 'POST':
        form = WarrantyForm(request.POST)
        if form.is_valid():
            warranty = form.save(commit=False)
            warranty.user_id = form.cleaned_data['user'].id  # Assign the logged-in user to the warranty
            warranty.order_id = form.cleaned_data['order'].id
            warranty.product_id = form.cleaned_data['product'].id
            warranty.save()
            messages.success(request, 'Warranty successfully added!')
            return redirect('add_warranty')  # Redirect to avoid resubmission on refresh
        else:
            messages.error(request, 'Form is not valid')
            print(form.errors)  # Print form errors to the console for debugging
    else:
        form = WarrantyForm()
    return render(request, 'admin/add_warranty.html', {'form': form})



def validate_warranty(request, pk):
    warranty = get_object_or_404(Warranty, pk=pk)
    status = 'Valid' if warranty.is_valid() else 'Expired'
    return render(request, 'user/validate_warranty.html', {'warranty': warranty, 'status': status})

def list_warranties(request):
    warranties = Warranty.objects.all()
    if 'search' in request.GET:
        search_term = request.GET['search']
        warranties = warranties.filter(product__name__icontains=search_term)
    return render(request, 'admin/view_warranty.html', {'warranties': warranties})

def delete_warranty(request, pk):
    warranty = get_object_or_404(Warranty, pk=pk)
    warranty.delete()
    return redirect('view_warranty')
