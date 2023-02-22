from django.db import models


class Task(models.Model):
    title = models.CharField(max_length=200)
    eta = models.DateField()
    last_modified = models.DateTimeField()


    def __str__(self):
        return self.title
