$("button").click(function() {
  calc_register()
});

function calc_register() {
    var whatodo = prompt("What would you like to do (ex. type: show, add, take, change or exit)?");
    var register_amount = {
        bill1: [1, 1, 1, 1, 1],
        bill2: [1, 1, 1, 1, 1],
        bill5: [1, 1, 1, 1, 1],
        bill10: [1, 1, 1, 1, 1],
        bill20: [1, 1, 1, 1, 1]
    };
    var bill1 = register_amount.bill1;
    var bill2 = register_amount.bill2;
    var bill5 = register_amount.bill5;
    var bill10 = register_amount.bill10;
    var bill20 = register_amount.bill20;

    while (whatodo != "exit") {
        var sum = bill1.length * 1 + bill2.length * 2 + bill5.length * 5 + bill10.length * 10 + bill20.length * 20;
        if (whatodo == "show") {
            console.log("This is how much money you have in the cash register:");
            console.log("$" + sum + " " + bill20.length + "x20 " + bill10.length + "x10 " + bill5.length + "x5 " + bill2.length + "x2 " + bill1.length + "x1");
            console.log("");
        } else if (whatodo == "add") {
            var add = prompt("Enter the bill amount you would like to add!");
            if (add == 20) {
                var add20 = prompt("How many bills of 20, would you like to add?");
                for (var i = 0; i < add20; i++) {
                    bill20.push(1);
                };
            } else if (add == 10) {
                var add10 = prompt("How many bills of 10, would you like to add?");
                for (var i = 0; i < add10; i++) {
                    bill10.push(1);
                };
            } else if (add == 5) {
                var add5 = prompt("How many bills of 5, would you like to add?");
                for (var i = 0; i < add5; i++) {
                    bill5.push(1);
                };
            } else if (add == 2) {
                var add2 = prompt("How many bills of 2, would you like to add?");
                for (var i = 0; i < add2; i++) {
                    bill2.push(1);
                };
            } else if (add == 1) {
                var add1 = prompt("How many bills of 1, would you like to add?");
                for (var i = 0; i < add1; i++) {
                    bill1.push(1);
                };
            } else {
                alert("Please enter a correct bill number such as: 20, 10, 5, 2, or 1");
                continue;
            };
        } else if (whatodo == "take") {
            var take = prompt("Enter the bill amount you would like to take out!");
            if (take == 20) {
                var take20 = prompt("How many bills of 20, would you like to take out?");
                for (var i = 0; i < take20; i++) {
                    bill20.splice(0, 1);
                };
            } else if (take == 10) {
                var take10 = prompt("How many bills of 10, would you like to take out?");
                for (var i = 0; i < take10; i++) {
                    bill10.splice(0, 1);
                };
            } else if (take == 5) {
                var take5 = prompt("How many bills of 5, would you like to take out?");
                for (var i = 0; i < take5; i++) {
                    bill5.splice(0, 1);
                };
            } else if (take == 2) {
                var take2 = prompt("How many bills of 2, would you like to take out?");
                for (var i = 0; i < take2; i++) {
                    bill2.splice(0, 1);
                };
            } else if (take == 1) {
                var take1 = prompt("How many bills of 1, would you like to take out?");
                for (var i = 0; i < take1; i++) {
                    bill1.splice(0, 1);
                }
            } else {
                alert("Please enter a dollar bill number such as: 20, 10, 5, 2, or 1");
                continue;
            };
        } else if (whatodo == "change") {
            var change = prompt("Enter change you would like to remove from cash register!");
            if (change > 20 && change % 20 != 0) {
                var change20 = Math.floor(change / 20);
                var change_res20 = change % 20;
                if (bill20.length >= change20) {
                    for (var i = 0; i < change20; i++) {
                        bill20.splice(0, 1);
                    };
                    if (change_res20 > 10) {
                        var change10 = Math.floor(change_res20 / 10);
                        var change_res10 = change_res20 % 10;
                        if (bill10.length >= change10) {
                            for (var i = 0; i < change10; i++) {
                                bill10.splice(0, 1);
                            };
                            if (change_res10 > 5) {
                                var change5 = Math.floor(change_res10 / 5);
                                var change_res5 = change_res10 % 5;
                                if (bill5.length >= change5) {
                                    for (var i = 0; i < change5; i++) {
                                        bill5.splice(0, 1);
                                    };
                                    if (change_res5 > 2) {
                                        var change2 = Math.floor(change_res5 / 2);
                                        var change_res2 = change_res5 % 2;
                                        if (bill2.length >= change2) {
                                            for (var i = 0; i < change2; i++) {
                                                bill2.splice(0, 1);
                                            };
                                            if (change_res2 == 1) {
                                                bill1.splice(0, 1);
                                            }
                                        } else {
                                            alert("Change can't be made!")
                                        }
                                    } else if (change_res5 == 2) {
                                        bill2.splice(0, 1);
                                    } else if (change_res5 == 1) {
                                        bill1.splice(0, 1);
                                    }
                                } else {
                                    alert("There aren't enough bills of 5! Please add more bills of 5")
                                }
                            } else if (change_res10 == 5) {
                                bill5.splice(0, 1);
                            } else if (change_res10 > 2) {
                                var change2 = Math.floor(change_res10 / 2);
                                var change_res2 = change_res10 % 2;
                                if (bill2.length >= change2) {
                                    for (var i = 0; i < change2; i++) {
                                        bill2.splice(0, 1);
                                    };
                                    if (change_res2 == 1) {
                                        bill1.splice(0, 1);
                                    }
                                }
                                else {
                                    alert("There aren't enough bills of 2. Please add more bills of 2!")
                                }
                            } else if (change_res10 == 2) {
                                bill2.splice(0, 1);
                            } else if (change_res10 == 1) {
                                bill1.splice(0, 1);
                            }
                        } else {
                            alert("There aren't enough bills of 10. Please add more bills of 10!")
                        }
                    } else if (change_res20 == 10) {
                        bill10.splice(0, 1);
                    } else if (change_res20 > 5) {
                        var change5 = Math.floor(change_res20 / 5);
                        var change_res5 = change_res20 % 5;
                        if (bill5.length >= change5) {
                            for (var i = 0; i < change5; i++) {
                                bill5.splice(0, 1);
                            };
                            if (change_res5 > 2) {
                                var change2 = Math.floor(change_res5 / 2);
                                var change_res2 = change_res5 % 2;
                                if (bill2.length >= change2) {
                                    for (var i = 0; i < change2; i++) {
                                        bill2.splice(0, 1);
                                    };
                                    if (change_res2 == 1) {
                                        bill1.splice(0, 1);
                                    }
                                }
                                else {
                                    alert("There aren't enough bills of 2. Please add more bills of 2!")
                                }
                            } else if (change_res5 == 2) {
                                bill2.splice(0, 1);
                            } else if (change_res5 == 1) {
                                bill1.splice(0, 1);
                            }
                        } else if (change_res20 > 2) {
                            var change2 = Math.floor(change_res5 / 2);
                            var change_res2 = change_res10 % 2;
                            if (bill2.length >= change2) {
                                for (var i = 0; i < change2; i++) {
                                    bill2.splice(0, 1);
                                };
                                if (change_res2 == 1) {
                                    bill1.splice(0, 1);
                                } else {
                                    alert("Change can't be made!")
                                }
                            }
                        } else {
                            alert("There aren't enough bills of 5. Please add more bills of 5")
                        }
                    } else if (change_res20 == 5) {
                        bill5.splice(0, 1);
                    } else if (change_res20 > 2) {
                        var change2 = Math.floor(change_res20 / 2);
                        var change_res2 = change_res20 % 2;
                        if (bill2.length >= change2) {
                            for (var i = 0; i < change2; i++) {
                                bill2.splice(0, 1);
                            };
                            if (change_res2 == 1) {
                                bill1.splice(0, 1);
                            }
                        } else {
                            alert("There aren't enough bills of 2. Please add more bills of 2")
                        }
                    } else if (change_res20 == 1) {
                        bill1.splice(0, 1);
                    }

                } else {
                    alert("There aren't enough bills of 20. Please add more bills of 20")
                }
            } else if (change >= 20 && change % 20 == 0) {
                var times20 = change / 20;
                if (bill20.length >= times20) {
                    for (var i = 0; i < times20; i++) {
                        bill20.splice(0, 1);
                    };
                } else {
                    alert("There aren't enough bills of 20.Please add more bills of 20");
                }
            } else if (change > 10) {
                var change10 = Math.floor(change / 10);
                var change_res10 = change % 10;
                if (bill10.length >= change10) {
                    for (var i = 0; i < change10; i++) {
                        bill10.splice(0, 1);
                    };
                    if (change_res10 > 5) {
                        var change5 = Math.floor(change_res10 / 5);
                        var change_res5 = change_res10 % 5;
                        if (bill5.length >= change5) {
                            for (var i = 0; i < change5; i++) {
                                bill5.splice(0, 1);
                            };
                            if (change_res5 > 2) {
                                var change2 = Math.floor(change_res5 / 2);
                                var change_res2 = change_res5 % 2;
                                if (bill2.length >= change2) {
                                    for (var i = 0; i < change2; i++) {
                                        bill2.splice(0, 1);
                                    };
                                    if (change_res2 == 1) {
                                        bill1.splice(0, 1);
                                    }
                                } else {
                                    alert("Change can't be made!")
                                }
                            } else if (change_res5 == 2) {
                                bill2.splice(0, 1);
                            } else if (change_res5 == 1) {
                                bill1.splice(0, 1);
                            }
                        } else {
                            alert("There aren't enough bills of 5. Please add more bills of 5")
                        }
                    } else if (change_res10 == 5) {
                        bill5.splice(0, 1);
                    } else if (change_res10 > 2) {
                        var change2 = Math.floor(change_res10 / 2);
                        var change_res2 = change_res10 % 2;
                        if (bill2.length >= change2) {
                            for (var i = 0; i < change2; i++) {
                                bill2.splice(0, 1);
                            };
                            if (change_res2 == 1) {
                                bill1.splice(0, 1);
                            }
                        }
                        else {
                            alert("There aren't enough bills of 2. Please add more bills of 2")
                        }
                    } else if (change_res10 == 2) {
                        bill2.splice(0, 1);
                    } else if (change_res10 == 1) {
                        bill1.splice(0, 1);
                    }
                }
            } else if(change == 10){
                bill10.splice(0, 1);
            } else if (change > 5) {
                var change5 = Math.floor(change / 5);
                var change_res5 = change % 5;
                if (bill5.length >= change5) {
                    for (var i = 0; i < change5; i++) {
                        bill5.splice(0, 1);
                    };
                    if (change_res5 > 2) {
                        var change2 = Math.floor(change_res5 / 2);
                        var change_res2 = change_res5 % 2;
                        if (bill2.length >= change2) {
                            for (var i = 0; i < change2; i++) {
                                bill2.splice(0, 1);
                            };
                            if (change_res2 == 1) {
                                bill1.splice(0, 1);
                            }
                        } else {
                            alert("Change can't be made!")
                        }
                    } else if (change_res5 == 2) {
                        bill2.splice(0, 1);
                    } else if (change_res5 == 1) {
                        bill1.splice(0, 1);
                    }
                } else {
                    alert("There aren't enough bills of 5. Please add more bills of 5")
                }
            } else if(change == 5){
                bill5.splice(0, 1);
            } else if (change > 2) {
                var change2 = Math.floor(change / 2);
                var change_res2 = change % 2;
                if (bill2.length >= change2) {
                    for (var i = 0; i < change2; i++) {
                        bill2.splice(0, 1);
                    };
                    if (change_res2 == 1) {
                        bill1.splice(0, 1);
                    }
                } else {
                    alert("Change can't be made!")
                }
            } else if (change == 2) {
                bill2.splice(0, 1);
            } else if (change == 1) {
                bill1.splice(0, 1);
            }
        } else {
            alert("Please enter a correct keyword such as: show, add, take, change or exit!");
        }
        whatodo = prompt("What would you like to do (ex. type: show, add, take, change or exit)?");
    };
};
