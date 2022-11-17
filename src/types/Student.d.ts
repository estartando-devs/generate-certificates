interface DataStudent {
  city: string
  neighborhood: string
  course: Course
  zipcode: string
  address: string
  dateBirth: string
  number: string
  availableTime: Boolean
  testimony: string
  isStudent: Boolean
  fullName: string
  phone: string
  email: string
}

interface Student {
  id: string
  data: DataStudent
}
