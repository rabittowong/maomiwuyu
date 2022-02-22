export class UserModel {
  id: string;
  characterName: string;
  email: string;
  avatar: string;
  isEmailVerified: boolean;
  verifiedDate: Date;
  lastLoginDate: Date;
  isAdmin: boolean;
  createdBy: string;
  createdDate: Date;
  updatedBy: string;
  updatedDate: Date;
}
