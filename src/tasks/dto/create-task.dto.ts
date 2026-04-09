// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 2-A  ·  Add validators to this DTO
// ─────────────────────────────────────────────────────────────────────────────
// Requirements:
//   - title    → required string, between 3 and 100 characters
//   - description → optional string, max 300 characters
//   - status   → optional; if provided must be one of: 'pending' | 'in-progress' | 'done'
//               hint: look up @IsEnum() from class-validator
//
// Import what you need from 'class-validator' and add the decorators below.
// ─────────────────────────────────────────────────────────────────────────────

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
const TaskStatus = ['pending', 'in-progress', 'done'] as const;
type TaskStatus = (typeof TaskStatus)[number];
  

export class CreateTaskDto {
  // TODO: add validator decorators
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)  
  title: string;


  // TODO: add validator decorators
  @IsOptional()
  @MaxLength(300)
  description?: string;


  // TODO: add validator decorators

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
