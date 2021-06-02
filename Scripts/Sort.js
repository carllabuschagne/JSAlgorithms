//Bubble Sort

function _Swap_Items(_Array, _FirstItemIndex, _SecondItemIndex) {

    let _HoldingItem;

    if (_Array[_FirstItemIndex] > _Array[_SecondItemIndex]) {

        _HoldingItem = _Array[_FirstItemIndex];
        _Array[_FirstItemIndex] = _Array[_SecondItemIndex];
        _Array[_SecondItemIndex] = _HoldingItem;

    }

    return _Array;

}

function _Draw_Array(_Array) {

    var _Main_Div = document.createElement("div");
    _Main_Div.className = "columns";

    for (i = 0; i < _Array.length; i++) {

        var _Div = document.createElement("div");
        _Div.style.height = _Array[i] + "0px";
        _Div.innerText = _Array[i];
        _Div.style.width = "10px";
        _Div.style.backgroundColor = "red";
        _Div.style.border = "1px black solid";

        _Main_Div.appendChild(_Div);

    }

    document.body.appendChild(_Main_Div);

}


function _Bubble_Sort(_Array) {

    let _Continue = true;

    console.log(_Array);

    while (_Continue) {

        _Continue = false;

        let j = 1;

        for (i = 0; i < _Array.length; i++) {

            _Swap_Items(_Array, i, j);
            j++;

            if (_Array[i] > _Array[j]) {
                _Continue = true;
            }

        }
        _Draw_Array(_Array);
        console.log(_Array);

    }
}