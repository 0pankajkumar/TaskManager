from django.db import models


class Task(models.Model):

    status_choices = [
        ("Pending", "Pending"),
        ("InProgress", "InProgress"),
        ("InReview", "InReview"),
        ("Complete", "Complete")
    ]

    title = models.CharField(max_length=200)
    eta = models.DateField()
    eta_updates = models.TextField(default="")
    status = models.CharField(max_length=50, choices=status_choices, default="Pending")
    status_updates = models.TextField(default="")
    


    def __str__(self):
        return self.title
