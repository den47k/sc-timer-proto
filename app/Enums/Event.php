<?php

namespace App\Enums;

enum Event: string
{
    case ThreeByThree = '3x3';
    case TwoByTwo = '2x2';
    case FourByFour = '4x4';
    case FiveByFive = '5x5';
    case SixBySix = '6x6';
    case SevenBySeven = '7x7';
    case ThreeByThreeBlindfolded = '3x3 Blindfolded';
    case ThreeByThreeFewestMoves = '3x3 Fewest Moves';
    case ThreeByThreeOneHanded = '3x3 One-Handed';
    case Pyraminx = 'Pyraminx';
    case Megaminx = 'Megaminx';
    case Skewb = 'Skewb';
    case SquareOne = 'Square-1';
    case Clock = 'Clock';
    case ThreeByThreeMultiBlind = '3x3 Multi-Blind';

    public static function toArray() {
         return array_column(self::cases(), 'value');
    }
}

