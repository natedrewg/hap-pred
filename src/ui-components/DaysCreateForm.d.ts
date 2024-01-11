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
export declare type DaysCreateFormInputValues = {
    Game?: boolean;
    Practice?: boolean;
    Indo?: boolean;
    Lift?: boolean;
    WallBall?: boolean;
    PT?: boolean;
    Homewok?: boolean;
    Nap?: boolean;
    VideoGames?: boolean;
    JessCall?: boolean;
    Hangout?: boolean;
    Parents?: boolean;
    Stressed?: boolean;
    GoodEvent?: boolean;
    BadEvent?: boolean;
    Classes?: boolean;
    Satisfied?: boolean;
    Meals?: number;
    Sleep?: number;
    Healthy?: number;
    Happy?: number;
    Description?: string;
};
export declare type DaysCreateFormValidationValues = {
    Game?: ValidationFunction<boolean>;
    Practice?: ValidationFunction<boolean>;
    Indo?: ValidationFunction<boolean>;
    Lift?: ValidationFunction<boolean>;
    WallBall?: ValidationFunction<boolean>;
    PT?: ValidationFunction<boolean>;
    Homewok?: ValidationFunction<boolean>;
    Nap?: ValidationFunction<boolean>;
    VideoGames?: ValidationFunction<boolean>;
    JessCall?: ValidationFunction<boolean>;
    Hangout?: ValidationFunction<boolean>;
    Parents?: ValidationFunction<boolean>;
    Stressed?: ValidationFunction<boolean>;
    GoodEvent?: ValidationFunction<boolean>;
    BadEvent?: ValidationFunction<boolean>;
    Classes?: ValidationFunction<boolean>;
    Satisfied?: ValidationFunction<boolean>;
    Meals?: ValidationFunction<number>;
    Sleep?: ValidationFunction<number>;
    Healthy?: ValidationFunction<number>;
    Happy?: ValidationFunction<number>;
    Description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type DaysCreateFormOverridesProps = {
    DaysCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Game?: PrimitiveOverrideProps<SwitchFieldProps>;
    Practice?: PrimitiveOverrideProps<SwitchFieldProps>;
    Indo?: PrimitiveOverrideProps<SwitchFieldProps>;
    Lift?: PrimitiveOverrideProps<SwitchFieldProps>;
    WallBall?: PrimitiveOverrideProps<SwitchFieldProps>;
    PT?: PrimitiveOverrideProps<SwitchFieldProps>;
    Homewok?: PrimitiveOverrideProps<SwitchFieldProps>;
    Nap?: PrimitiveOverrideProps<SwitchFieldProps>;
    VideoGames?: PrimitiveOverrideProps<SwitchFieldProps>;
    JessCall?: PrimitiveOverrideProps<SwitchFieldProps>;
    Hangout?: PrimitiveOverrideProps<SwitchFieldProps>;
    Parents?: PrimitiveOverrideProps<SwitchFieldProps>;
    Stressed?: PrimitiveOverrideProps<SwitchFieldProps>;
    GoodEvent?: PrimitiveOverrideProps<SwitchFieldProps>;
    BadEvent?: PrimitiveOverrideProps<SwitchFieldProps>;
    Classes?: PrimitiveOverrideProps<SwitchFieldProps>;
    Satisfied?: PrimitiveOverrideProps<SwitchFieldProps>;
    Meals?: PrimitiveOverrideProps<TextFieldProps>;
    Sleep?: PrimitiveOverrideProps<TextFieldProps>;
    Healthy?: PrimitiveOverrideProps<TextFieldProps>;
    Happy?: PrimitiveOverrideProps<TextFieldProps>;
    Description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type DaysCreateFormProps = React.PropsWithChildren<{
    overrides?: DaysCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: DaysCreateFormInputValues) => DaysCreateFormInputValues;
    onSuccess?: (fields: DaysCreateFormInputValues) => void;
    onError?: (fields: DaysCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: DaysCreateFormInputValues) => DaysCreateFormInputValues;
    onValidate?: DaysCreateFormValidationValues;
} & React.CSSProperties>;
export default function DaysCreateForm(props: DaysCreateFormProps): React.ReactElement;
