export interface FileRecord {
  _id: string
  name: string
  size: number
  key: string
  url: string
}

export type Profile = {
  id?: string
  cpf?: string
  completeName?: string
  birthDate?: string
  phone?: string
  avatar?: string
}

export type User = {
  id: string
  email: string
  password: string
  passwordResetToken?: string
  isAdmin: string
  profile?: Profile
  student?: Student
  educator?: Educator
}

export type Student = {
  id: string
  userId: string
  user: User
  enrollments?: Enrollment[]
  educators?: Educator[]
}

export type Educator = {
  id: string
  user: User
  enrollments?: Enrollment[]
  students?: Student[]
}

export type Comment = {
  id: string
  userId: string
  user: User
  description: string
}

export type Class = {
  id: string
  title: string
  description?: string
  video: FileRecord
  comments?: Comment
}

export type Module = {
  id: string
  title: string
  description: string
  classes?: Class[]
}

export type Enrollment = {
  id: string
  title: string
  description: string
  modules: Module[]
  students?: Student[]
  educators?: Educator[]
}

export enum PreEnrollmentStatus {
  pending = 'pending',
  approved = 'approved',
  rejected = 'approved',
  cancelled = 'approved',
}

export type PreEnrollment = {
  id: string
  enrollment: Enrollment
  enrollmentId: string
  student: Student
  studentId: string
  status: PreEnrollmentStatus
  createdAt: string
}
