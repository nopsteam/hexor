export interface IItemSelection<TItem> {
    pieceOfData: TItem
    selected: boolean
}

export class ItemSelection<TItem> implements IItemSelection<TItem> {
    pieceOfData: TItem
    selected: boolean
    
    constructor(item: TItem, selected: boolean = false) {
        this.selected = selected
        this.pieceOfData = item
    }

    static with<TItem>(item: TItem, selected: boolean = false) : ItemSelection<TItem> {
        return new ItemSelection<TItem>(item, selected)
    }

    static withMany<TItem>(items: TItem[], selected: boolean = false) : ItemSelection<TItem>[] {
        return items.map(item => ItemSelection.with<TItem>(item, selected))
    }
}

