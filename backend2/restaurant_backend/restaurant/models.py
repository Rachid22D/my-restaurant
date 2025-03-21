from django.db import models

# Create your models here.


class RestaurantInfo(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    opening_hours = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class FeaturedItem(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.DecimalField(max_digits=6, decimal_places=2)
    image_url = models.URLField(blank=True, null=True)  # This field is optional

    def __str__(self):
        return self.name