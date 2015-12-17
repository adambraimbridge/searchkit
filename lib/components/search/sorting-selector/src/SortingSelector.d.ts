import { SearchkitComponent, SortingAccessor, SortingOptions } from "../../../../core";
export declare class SortingSelector extends SearchkitComponent<SortingOptions, any> {
    accessor: SortingAccessor;
    defineAccessor(): SortingAccessor;
    renderOption(option: any): JSX.Element;
    updateSorting(e: any): void;
    getSelectedValue(): string;
    render(): JSX.Element;
}
