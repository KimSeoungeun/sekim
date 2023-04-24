// 행렬A/B input 숫자 //
function inputNumberFormat(obj) {
    obj.value = uncomma(obj.value);
}
// 숫자만 입력 //
function uncomma(str) {
    str = String(str);
    return str.replace(/[^-0-9]/g, '');
}
// 값 콤마 //
function inputNumberFormat2(obj2) {
    return obj2 = comma2(obj2);
}
// 콤마 입력 //
function comma2(str2) {
    str2 = String(str2);
    return str2.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
// 행렬 생성 input 숫자만 //
function inputNumberFormat3(obj) {
    obj.value = uncomma3(obj.value);
}
// 숫자만 입력 //
function uncomma3(str) {
    str3 = String(str);
    return str3.replace(/[^0-9]/g, '');
}
$(window).on('load', function () {
    let MainNumberBox = document.getElementById('MainNumberBox');
    let MainNumberBox2 = document.getElementById('MainNumberBox2');
    let MainNumberBox3 = document.getElementById('MainNumberBox3');
    // 행렬A 셀 추가 //
    let j = 1;
    let p = 0;
    let w = 0;
    /*$('#CellplusBox').on('click', function () {
        $('#ColumnBox').val('');
        $('#RowBox').val('');
        if (j != 7) {
            MainNumberBox.innerHTML = '';
            e = 0;
            j++;
            let i = 0;
            while (i < j * j) {
                Keep = '<input type="number" id="NumberA' + (i) +
                    '" class="NumberA" onkeyup="inputNumberFormat(this)" >';
                MainNumberBox.innerHTML += Keep;
                i++;
            }
            MainNumberBox.style.width = (70 * j) + 'px';
        }
    });*/
    let a = 1;
    /*// 행렬B 셀 추가 //
    $('#CellplusBox2').on('click', function () {
        $('#ColumnBox2').val('');
        $('#RowBox2').val('');
        if (a != 7) {
            MainNumberBox2.innerHTML = '';
            a++;
            let i = 0;
            while (i < a * a) {
                Keep = '<input type="number" id="NumberB' + (i) +
                    '" class="NumberA" onkeyup="inputNumberFormat(this)">';
                MainNumberBox2.innerHTML += Keep;
                i++;
            }
            MainNumberBox2.style.width = (70 * a) + 'px';
        }
    });
    // 행렬A 셀 제거 //
    $('#CellminusBox').on('click', function () {
        $('#ColumnBox').val('');
        $('#RowBox').val('');
        if (j > 1) {
            e = 0;
            MainNumberBox.innerHTML = '';
            let i = 0;
            while (i < (j - 1) * (j - 1)) {
                Keep = '<input type="number" id="NumberA' + (i) +
                    '" class="NumberA" onkeyup="inputNumberFormat(this)">';
                MainNumberBox.innerHTML += Keep;
                i++;
            }
            MainNumberBox.style.width = (70 * (j - 1)) + 'px';
            j = j - 1;
        }
    });
    // 행렬B 셀 제거 //
    $('#CellminusBox2').on('click', function () {
        $('#ColumnBox2').val('');
        $('#RowBox2').val('');
        if (a > 1) {
            MainNumberBox2.innerHTML = '';
            let i = 0;
            while (i < (a - 1) * (a - 1)) {
                Keep = '<input type="number" id="NumberB' + (i) +
                    '"class="NumberA" onkeyup="inputNumberFormat(this)">';
                MainNumberBox2.innerHTML += Keep;
                i++;
            }
            MainNumberBox2.style.width = (70 * (a - 1)) + 'px';
            a = a - 1;
        }
    });*/
    // 행렬A와 행렬B input 위치 바꾸기 //
    $('#ChangeBox').on('click', function () {
        let Colum = Number($('#ColumnBox').val());
        let Row = Number($('#RowBox').val());
        let Colum2 = Number($('#ColumnBox2').val());
        let Row2 = Number($('#RowBox2').val());
        let i = 0;
        if (Row == Row2 && Colum == Colum2) {
            if (Number($('#ColumnBox2').val()) == a && Number($('#ColumnBox').val()) == p) {
                while (i < (j * a)) {
                    let NumberChangeA = $('#NumberA' + (i)).val();
                    let NumberChangeB = $('#NumberB' + (i)).val();
                        $('#NumberA' + i).val(NumberChangeB);
                        $('#NumberB' + i).val(NumberChangeA);
                    i++;
                }
            } else {
                alert('행렬의 크기는 같아야 합니다.');
            }
        } else {
            alert('행렬의 크기는 같아야 합니다.');
        }
    });
    let KeepValue = [];
    let KeepValue2 = [];
    let MainKeepValue = [];
    let MainKeepValue2 = [];
    // 행렬A X 행렬B //
    $('#MultiplyBox').on('click', function () {
        let Colum = Number($('#ColumnBox').val());
        let Row = Number($('#RowBox').val());
        let Colum2 = Number($('#ColumnBox2').val());
        let Row2 = Number($('#RowBox2').val());
        MainNumberBox3.innerHTML = '';
        MainNumberBox3.style.width = (70 * a) + 'px';
        MainKeepValue = [];
        MainKeepValue2 = [];
        KeepValue = [];
        KeepValue2 = [];
        if (Colum == Row2 || (Row == Colum2 && Row2 == Colum)) {
            let i = 0;
            while (i < Colum * Row) {
                if (Colum == p && Row == j) {
                    let Keep = $('#NumberA' + (i)).val();
                    if (Keep == '') {
                        alert('값을 입력하시요.');
                        MainKeepValue=[];
                        MainKeepValue2=[];
                        break;
                    } else {
                        KeepValue.push(Number($('#NumberA' + (i)).val()));
                        if ((i + 1) % Colum == 0) {
                            MainKeepValue.push(KeepValue);
                            KeepValue = [];
                        };
                    }
                } else {
                    alert('A와 B의 행렬을 확인해주세요.');
                    break;
                }
                i++;
            }
            let u = 0;
            while (u < Colum2 * Row2) {
                if (Colum2 == a) {
                    let Keep2 = $('#NumberB' + (u)).val();
                    if (Keep2 == '') {
                        alert('값을 입력하세요.');
                        MainKeepValue=[];
                        MainKeepValue2=[];
                        break;
                    } else {
                        KeepValue2.push(Number($('#NumberB' + (u)).val()));
                        if ((u + 1) % Colum2 == 0) {
                            MainKeepValue2.push(KeepValue2);
                            KeepValue2 = [];
                        };
                    }
                } else if(Colum != p && Colum2 != a && Row != j && Row2 != w ){
                    break;
                } else {
                    alert('A와 B의 행렬을 확인해주세요.');
                    break;
                }
                u++;
            }
            let g = 0;
            while (g < MainKeepValue.length) {
                let k = 0;
                while (k < MainKeepValue2[0].length) {
                    let NumberValue = 0;
                    let s = 0;
                    while (s < MainKeepValue[0].length) {
                        NumberValue += MainKeepValue[g][s] * MainKeepValue2[s][k];
                        s++;
                    }
                    if (isNaN(NumberValue)) {
                        break;
                    } else {
                        MainNumberBox3.innerHTML +=
                            '<div class="FinishNumber">' + inputNumberFormat2(NumberValue) + '</div>';
                    }
                    k++;
                }
                g++;
            }
        } else {
            alert('A와 B의 행렬을 확인해주세요.');
        }
    });
    // 행렬A + 행렬B //
    $('#PlusBox').on('click', function () {
        MainNumberBox3.innerHTML = '';
        MainNumberBox3.style.width = (70 * (a)) + 'px';
        if (Number($('#RowBox').val()) == Number($('#RowBox2').val()) && Number($('#ColumnBox').val()) ==
            Number($('#ColumnBox2').val())) {
            let k = 0;
            if (Number($('#ColumnBox2').val()) == a && Number($('#ColumnBox').val()) == p) {
                while (k < (j) * (a)) {
                    let NumberValue = $('#NumberA' + (k)).val();
                    let NumberValue2 = $('#NumberB' + (k)).val();
                    if (NumberValue != '' && NumberValue2 != '') {
                        if (isNaN(NumberValue) || isNaN(NumberValue2)) {
                            break;
                        } else {
                            FinishNumber = '<div class="FinishNumber" onkeyup="inputNumberFormat(this)">' +
                                inputNumberFormat2(Number(NumberValue) + Number(NumberValue2)) + '</div>';
                            MainNumberBox3.innerHTML += FinishNumber;
                        }
                    } else {
                        alert('값을 입력하세요.');
                        MainNumberBox3.innerHTML = '';
                        break;
                    }
                    k++;
                }
            } else {
                alert('행렬의 크기는 같아야 합니다.');
            }
        } else {
            alert('행렬의 크기는 같아야 합니다.');
        }
    });
    // 행렬A - 행렬B //
    $('#SubtractBox').on('click', function () {
        MainNumberBox3.innerHTML = '';
        MainNumberBox3.style.width = (70 * (a)) + 'px';
        if (Number($('#RowBox').val()) == Number($('#RowBox2').val()) && Number($('#ColumnBox').val()) ==
            Number($('#ColumnBox2').val())) {
            let k = 0;
            if (Number($('#ColumnBox2').val()) == a && Number($('#ColumnBox').val()) == p) {
                while (k < (j) * (a)) {
                    let NumberValue = $('#NumberA' + (k)).val();
                    let NumberValue2 = $('#NumberB' + (k)).val();
                    if (NumberValue != '' && NumberValue2 != '') {
                        if (isNaN(NumberValue) || isNaN(NumberValue2)) {
                            break;
                        } else {
                            FinishNumber = '<div class="FinishNumber">' +
                                inputNumberFormat2(Number(NumberValue) - Number(NumberValue2)) + '</div>';
                            MainNumberBox3.innerHTML += FinishNumber;
                        }
                    } else {
                        alert('값을 입력하세요.');
                        MainNumberBox3.innerHTML = '';
                        break;
                    }
                    k++;
                }
            } else {
                alert('행렬의 크기는 같아야 합니다.');
            }
        } else {
            alert('행렬의 크기는 같아야 합니다.');
        }
    });
    // 모든 값 삭제 //
    $('#ClearBox').on('click', function () {
        MainNumberBox.innerHTML = '';
        MainNumberBox2.innerHTML = '';
        MainNumberBox3.innerHTML = '';
        j = 0;
        a = 0;
        e = 0;
        $('#RowBox').val('');
        $('#RowBox2').val('');
        $('#ColumnBox').val('');
        $('#ColumnBox2').val('');
    });
    // 숫자 랜덤 박스 //
    $('#RandomBox').on('click', function () {
        let i = 0;
        while (i < 49) {
            $('#NumberA' + (i)).val(Math.floor(Math.random() * 101));
            i++;
        }
    });
    $('#RandomBox2').on('click', function () {
        let i = 0;
        while (i < 49) {
            $('#NumberB' + (i)).val(Math.floor(Math.random() * 101));
            i++;
        }
    });
    // 행렬 박스생성 버튼 //
    $('#FinishButton').on('click', function () {
        MainNumberBox.innerHTML = '';
        if ($('#RowBox').val() < 8 && $('#ColumnBox').val() < 8) {
            j = 0;
            p = 0;
            let i = 0;
            while (i < Number($('#RowBox').val()) * Number($('#ColumnBox').val())) {
                Keep = '<input type="text" id="NumberA' + (i) +
                    '" class="NumberA" maxlength="3" onkeyup="inputNumberFormat(this);" >';
                MainNumberBox.innerHTML += Keep;
                i++;
            }
            let k = 0;
            while (k < Number($('#RowBox').val())) {
                j++;
                k++;
            }
            let s = 0;
            while (s < Number($('#ColumnBox').val())) {
                p++;
                s++;
            }
            MainNumberBox.style.width = 70 * Number($('#ColumnBox').val()) + 'px';
        } else {
            alert('7이하까지 출력이 가능합니다.');
        }
    });
    $('#FinishButton2').on('click', function () {
        MainNumberBox2.innerHTML = '';
        if ($('#RowBox2').val() < 8 && $('#ColumnBox2').val() < 8) {
            a = 0;
            w = 0;
            let i = 0;
            while (i < Number($('#RowBox2').val()) * Number($('#ColumnBox2').val())) {
                Keep = '<input type="text" id="NumberB' + (i) +
                    '" class="NumberB " maxlength="3" onkeyup="inputNumberFormat(this)" >';
                MainNumberBox2.innerHTML += Keep;
                i++;
            }
            let k = 0;
            while (k < Number($('#ColumnBox2').val())) {
                a++;
                k++;
            }
            let s = 0;
            while (s < Number($('#ColumnBox').val())) {
                w++;
                s++;
            }
            MainNumberBox2.style.width = 70 * Number($('#ColumnBox2').val()) + 'px';
        } else {
            alert('7이하까지 출력이 가능합니다.');
        }
    });
});
