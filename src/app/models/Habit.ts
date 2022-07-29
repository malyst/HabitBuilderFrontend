export class Habit {
    constructor(
        public name: string = "",
        public description: string = "",
        public duration: number = 0,
        public count: number = 0,
        public dailyCompletion: number = 0,
        public yearlyCompletion: number = 0,
        public habitRewards: any
        ) {}
}