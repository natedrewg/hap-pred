/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type DaysUpdateFormInputValues = {
    Game?: boolean;
    Practice?: boolean;
    Indo?: boolean;
    Lift?: boolean;
    WallBall?: boolean;
    PT?: boolean;
    Homework?: boolean;
    Nap?: boolean;
    VideoGames?: boolean;
    JessCall?: boolean;
    Hangout?: boolean;
    Parents?: boolean;
    GoodEvent?: boolean;
    BadEvent?: boolean;
    BibleTime?: boolean;
    Classes?: boolean;
    BibleStudy?: boolean;
    Satisfied?: boolean;
    Prayed?: boolean;
    Meals?: number;
    StressedOut?: number;
    Healthy?: number;
    Happy?: number;
    Sleep?: number;
    Description?: string;
    Homewok?: boolean;
    Stressed?: boolean;
};
export declare type DaysUpdateFormValidationValues = {
    Game?: ValidationFunction<boolean>;
    Practice?: ValidationFunction<boolean>;
    Indo?: ValidationFunction<boolean>;
    Lift?: ValidationFunction<boolean>;
    WallBall?: ValidationFunction<boolean>;
    PT?: ValidationFunction<boolean>;
    Homework?: ValidationFunction<boolean>;
    Nap?: ValidationFunction<boolean>;
    VideoGames?: ValidationFunction<boolean>;
    JessCall?: ValidationFunction<boolean>;
    Hangout?: ValidationFunction<boolean>;
    Parents?: ValidationFunction<boolean>;
    GoodEvent?: ValidationFunction<boolean>;
    BadEvent?: ValidationFunction<boolean>;
    BibleTime?: ValidationFunction<boolean>;
    Classes?: ValidationFunction<boolean>;
    BibleStudy?: ValidationFunction<boolean>;
    Satisfied?: ValidationFunction<boolean>;
    Prayed?: ValidationFunction<boolean>;
    Meals?: ValidationFunction<number>;
    StressedOut?: ValidationFunction<number>;
    Healthy?: ValidationFunction<number>;
    Happy?: ValidationFunction<number>;
    Sleep?: ValidationFunction<number>;
    Description?: ValidationFunction<string>;
    Homewok?: ValidationFunction<boolean>;
    Stressed?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DaysUpdateFormOverridesProps = {
    DaysUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Game?: PrimitiveOverrideProps<SwitchFieldProps>;
    Practice?: PrimitiveOverrideProps<SwitchFieldProps>;
    Indo?: PrimitiveOverrideProps<SwitchFieldProps>;
    Lift?: PrimitiveOverrideProps<SwitchFieldProps>;
    WallBall?: PrimitiveOverrideProps<SwitchFieldProps>;
    PT?: PrimitiveOverrideProps<SwitchFieldProps>;
    Homework?: PrimitiveOverrideProps<SwitchFieldProps>;
    Nap?: PrimitiveOverrideProps<SwitchFieldProps>;
    VideoGames?: PrimitiveOverrideProps<SwitchFieldProps>;
    JessCall?: PrimitiveOverrideProps<SwitchFieldProps>;
    Hangout?: PrimitiveOverrideProps<SwitchFieldProps>;
    Parents?: PrimitiveOverrideProps<SwitchFieldProps>;
    GoodEvent?: PrimitiveOverrideProps<SwitchFieldProps>;
    BadEvent?: PrimitiveOverrideProps<SwitchFieldProps>;
    BibleTime?: PrimitiveOverrideProps<SwitchFieldProps>;
    Classes?: PrimitiveOverrideProps<SwitchFieldProps>;
    BibleStudy?: PrimitiveOverrideProps<SwitchFieldProps>;
    Satisfied?: PrimitiveOverrideProps<SwitchFieldProps>;
    Prayed?: PrimitiveOverrideProps<SwitchFieldProps>;
    Meals?: PrimitiveOverrideProps<TextFieldProps>;
    StressedOut?: PrimitiveOverrideProps<TextFieldProps>;
    Healthy?: PrimitiveOverrideProps<TextFieldProps>;
    Happy?: PrimitiveOverrideProps<TextFieldProps>;
    Sleep?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
    Homewok?: PrimitiveOverrideProps<SwitchFieldProps>;
    Stressed?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type DaysUpdateFormProps = React.PropsWithChildren<{
    overrides?: DaysUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    days?: any;
    onSubmit?: (fields: DaysUpdateFormInputValues) => DaysUpdateFormInputValues;
    onSuccess?: (fields: DaysUpdateFormInputValues) => void;
    onError?: (fields: DaysUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DaysUpdateFormInputValues) => DaysUpdateFormInputValues;
    onValidate?: DaysUpdateFormValidationValues;
} & React.CSSProperties>;
export default function DaysUpdateForm(props: DaysUpdateFormProps): React.ReactElement;
