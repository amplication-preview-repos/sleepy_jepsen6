/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UberRequestWhereInput } from "./UberRequestWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UberRequestListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UberRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => UberRequestWhereInput)
  @IsOptional()
  @Field(() => UberRequestWhereInput, {
    nullable: true,
  })
  every?: UberRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => UberRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => UberRequestWhereInput)
  @IsOptional()
  @Field(() => UberRequestWhereInput, {
    nullable: true,
  })
  some?: UberRequestWhereInput;

  @ApiProperty({
    required: false,
    type: () => UberRequestWhereInput,
  })
  @ValidateNested()
  @Type(() => UberRequestWhereInput)
  @IsOptional()
  @Field(() => UberRequestWhereInput, {
    nullable: true,
  })
  none?: UberRequestWhereInput;
}
export { UberRequestListRelationFilter as UberRequestListRelationFilter };
