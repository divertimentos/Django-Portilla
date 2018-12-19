import random
import django
from faker import Faker

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'ProTwo.settings')

from appTwo.models import User

fakegen = Faker()

infos = ['Name', 'LastName', 'Email']

def add_info():
    i = User.objects.get_or_create(top_name=random.choice(topics))[0]
    i.save()
    return i

def populate(N=5):
    for entry in range(N):
        inf = add_info()

        fake_name = fakegen.name()
        fake_lastname = fakegen.name()

