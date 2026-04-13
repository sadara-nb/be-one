// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 3-B  ·  Create UpdateUserDto
// ─────────────────────────────────────────────────────────────────────────────
// Same as CreateUserDto but every field is optional (PATCH semantics).
// ─────────────────────────────────────────────────────────────────────────────

// TODO: your code here

import { IsNotEmpty, IsOptional, IsString, IsInt, MinLength, MaxLength, IsEmail, IsEnum} from "class-validator";
const UserRole = ['student', 'teacher', 'admin'] as const;
type UserRole = (typeof UserRole)[number];

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    @MinLength(2)
    @MaxLength(50)
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string

    @IsInt()
    @IsOptional()
    @MinLength(1)
    @MaxLength(120)
    age?: number

    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;

}