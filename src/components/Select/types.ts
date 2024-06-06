import { ReactElement, ReactNode } from "react";

export interface SelectProps {
    idSelect?: string,
    name: string,
    labelName?: string,
    children: ReactNode
}