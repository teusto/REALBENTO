interface Intent {
    name: string;
    boundaries: any;
}

interface IAddNewGoal {
    name: string;
    size: GoalSize;
    description: string;
    box: number;
}

interface ICreateNewBox {
    boxId: string;
    slots: BoxSlots;
    goals: string[];
}

export type GoalSize = 's' | 'm' | 'l';
export type BoxSlots = 1 | 2 | 3 | 4;
