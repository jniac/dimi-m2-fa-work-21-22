import { Wave } from './wave.js';

export class WaveGroup{
    constructor(){
        this.totalWaves = 4;
        this.totalPoints = 10;
        this.color = ['rgba(0,185,206,0.4)','rgba(160,206,222,0.4)','rgba(0,100,162,0.4)'];
        this.waves = [];
        
        for (let i = 0; i < this.totalWaves; i++){
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i],
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight){
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx){
        for (let i = 0; i < this.totalWaves; i++){
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }
}