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
    status = models.CharField(max_length=50, choices=status_choices, default="Pending")
    


    def __str__(self):
        return self.title


class AuditTrial(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    new_value = models.CharField(max_length=50)
    field_updated = models.CharField(max_length=20)
    last_modified = models.DateTimeField()
    

    def __str__(self):
        return self.field_updated + " " + self.new_value
