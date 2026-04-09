// ─────────────────────────────────────────────────────────────────────────────
// ACTIVITY 2-B  ·  Build the UpdateTaskDto
// ─────────────────────────────────────────────────────────────────────────────
// Requirements:
//   - Same fields as CreateTaskDto but ALL fields are optional (it's a PATCH)
//   - Re-use the same validators but add @IsOptional() to each field
// ─────────────────────────────────────────────────────────────────────────────

// TODO: import validators from 'class-validator'

import { IsEnum, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";
const TaskStatus = ['pending', 'in-progress', 'done'] as const;
type TaskStatus = (typeof TaskStatus)[number];
  
export class UpdateTaskDto {
  // TODO: implement the DTO (copy fields from CreateTaskDto and make them optional)

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  @IsOptional()  
  title?: string;


  @IsOptional()
  @MaxLength(300)
  description?: string;


  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
