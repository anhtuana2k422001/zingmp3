    const $ = document.querySelector.bind(document);
    const $$ = document.querySelectorAll.bind(document);


    $('.app').onmousedown = function (){
        contten_setting.classList.remove("active");
        logout.classList.remove("active");
    }


    // -------------------------- Navigation  ----------------------------

    const nav_btn_pre =  $$('.container_header--content_btn')[0];
    const nav_btn_next =  $$('.container_header--content_btn')[1];
    // xử lý active, click vào items nav
    const sidebar_link = $$('.nav_label--sidebar_link');
    sidebar_link.forEach((link, index)=>{
        sidebar_link[index].onclick = function (){
            if(index<9){
                // active khi mà click vào link 
                $('.nav_label--sidebar_link.active').classList.remove('active');
                sidebar_link[index].classList.add('active');

                // Xóa Trên mobile luôn
                const mobile_link  = $('.listen_mobile--link_tag.active');
                if(mobile_link){
                    mobile_link.classList.remove('active');
                }
            }     
            if(1<index){
                // thông báo chưa hoàn thiện trang web 
                search_history.classList.add('active_icon');
                setTimeout(function(){
                    search_history.classList.remove('active_icon');
                },3000)
            }
            if(index==0){
                // location.reload();
                $('.container_body').style.display = 'none';
                $('.container_profile').style.display = 'none';
                setTimeout(function(){
                    $('.container_profile').style.display = 'block';
                },100)
                nav_btn_pre.classList.remove('active');
                nav_btn_next.classList.add('active');

                // Thêm active trên mobile để đồng bộ pc 
                $$('.listen_mobile--link_tag')[0].classList.add('active');
            }
            if(index==1){
                $('.container_profile').style.display = 'none';
                setTimeout(function(){
                    $('.container_body').style.display = 'block';
                },100)
                nav_btn_pre.classList.add('active');
                nav_btn_next.classList.remove('active');

                // Thêm active trên mobile để đồng bộ pc 
                $$('.listen_mobile--link_tag')[1].classList.add('active');
            }

        }
    })

    // Xử lý nút next , back trên pc 
    const btn_next_pre_next = $$('.container_header--content_btn');
    btn_next_pre_next.forEach(function(btn, index){
        btn.onclick = function (){
           $('.nav_label--sidebar_link.active').classList.remove('active');
            if(index==0 ){
                $$('.nav_label--sidebar_link')[0].classList.add('active');
                $('.container_body').style.display = 'none';
                $('.container_profile').style.display = 'none';
                setTimeout(function(){
                    $('.container_profile').style.display = 'block';
                },100)
                nav_btn_pre.classList.remove('active');
                nav_btn_next.classList.add('active');
            }
            if(index==1){
                $$('.nav_label--sidebar_link')[1].classList.add('active');
                $('.container_profile').style.display = 'none';
                setTimeout(function(){
                    $('.container_body').style.display = 'block';
                },100)
                nav_btn_pre.classList.add('active');
                nav_btn_next.classList.remove('active');
            }
        }
    })

    // Xử lý nav trên mobile 
        const listen_link_monbie = $$('.listen_mobile--link_tag');
        listen_link_monbie.forEach((link, index)=>{
            listen_link_monbie[index].onclick = function (){
                $('.listen_mobile--link_tag.active').classList.remove('active');

                // Xóa Trên pc luôn 
                $('.nav_label--sidebar_link.active').classList.remove('active');
                this.classList.add('active');
                if(1<index){
                    // thông báo chưa hoàn thiện trang web 
                    search_history.classList.add('active_icon');
                    setTimeout(function(){
                        search_history.classList.remove('active_icon');
                    },3000)
                }
                if(index==0){
                    $('.container_body').style.display = 'none';
                    $('.container_profile').style.display = 'none';
                    setTimeout(function(){
                        $('.container_profile').style.display = 'block';
                    },100)
                    
                    // trên pc phải tương ứng
                    $$('.nav_label--sidebar_link')[0].classList.add('active');
                }
                if(index==1){
                    $('.container_profile').style.display = 'none';
                    setTimeout(function(){
                        $('.container_body').style.display = 'block';
                    },100)

                    $$('.nav_label--sidebar_link')[1].classList.add('active');
                }
    
            }
        })

    // Nav : Xử lý scroll khi di chuột vào trong phần nav
    const nav_scrooll = $('.nav_label--sidebar_croller');
    nav_scrooll.onmouseover = function (){
        nav_scrooll.classList.add('active');
    }
    nav_scrooll.onmouseout = function (){
        nav_scrooll.classList.remove('active');
    }

    // Xử lý click thả tim trên mobile 
    const heart_mobile = $$('.listen_mobile--player_left--icon')[0];
    heart_mobile.onclick = function (){
        heart_mobile.classList.toggle('active');
    }

    // -------------------------- container  ----------------------------

    //container : Xử lý scroll khi di chuột vào trong phần nav
    const container_scrooll = $('.container');

    container_scrooll.onmouseover = function (){
        container_scrooll.classList.add('active');
    }
    container_scrooll.onmouseout = function (){
        container_scrooll.classList.remove('active');
    }

    // -------------------------- header container  ---------------------------


    // Xử lý avata người dùng 


    const avata = $$('.container_header--content_extend--item')[3]
    avata.onclick =function (){
        // location.reload();
        $('.container_body').style.display = 'none';
        $('.container_profile').style.display = 'none';
        $('.nav_label--sidebar_link.active').classList.remove('active');
        $$('.nav_label--sidebar_link')[0].classList.add('active');
        setTimeout(function(){
            $('.container_profile').style.display = 'block';
        },100)
    }

    // xử lý phần setting 

    const contten_setting = $(".container_header--content_extend--setting");

    const icon_setting = $('.container_header--content_extend--item .fa-cog');
    const setting = icon_setting.parentNode;
    setting.onclick = function (){
        contten_setting.classList.add("active");
    }
    



    // sử hover vào giao diện chủ đề 
    const change_color = $$('.container_header--content_extend--modal_themse--item');
    const out_in_user_color = $('.container_header--content_extend--modal_title--icon');
    const modal_themse = $('.container_header--content_extend--modal');
    const shirt_icon = $('.container_header--content_extend--item .fa-tshirt');
    shirt_themse = shirt_icon.parentNode;

    shirt_themse.onclick = function (){
        modal_themse.classList.add('active');
    }

    out_in_user_color.onclick = function (){
        modal_themse.classList.remove('active');
    }

    change_color.forEach(function(imtem){
        imtem.onmouseover = function(){
            this.classList.add('active');
        }
        imtem.onmouseout = function(){
            this.classList.remove('active');
        }
    })

    // xử lý, thay đổi màu nền vào trang web
    const colors = $$('.container_header--content_extend--modal_themse_btn.change_color');

    colors.forEach((item, index)=>{
        item.onclick = function (){
            if(index==0){
                $('.app').classList.remove('purple_color');
                $('.app').classList.remove('dark_color');
                $('.app').classList.remove('green_color');
                $('.app').classList.remove('red_color');
            }
            if(index==1){
                $('.app').classList.remove('purple_color');
                $('.app').classList.remove('green_color');
                $('.app').classList.remove('red_color');
                $('.app').classList.add('dark_color');
            }
            if(index==2){
                $('.app').classList.remove('dark_color');
                $('.app').classList.remove('green_color');
                $('.app').classList.remove('red_color');
                $('.app').classList.add('purple_color');
            }
            if(index==3){
                $('.app').classList.remove('purple_color');
                $('.app').classList.remove('dark_color');
                $('.app').classList.remove('red_color');
                $('.app').classList.add('green_color');
            }
            if(index==4){
                $('.app').classList.remove('purple_color');
                $('.app').classList.remove('dark_color');
                $('.app').classList.remove('green_color');
                $('.app').classList.add('red_color');
            }
            out_in_user_color.click();
        }
    })

    // Xử Lý xem giao diện ảnh để có thể đổi 
    const colors_view = $$('.container_header--content_extend--modal_themse_btn.color_view');
    colors_view.forEach((item, index)=>{
        item.onclick = function (){
            if(index==0){
                $('.app').classList.remove('purple_color_view');
                $('.app').classList.remove('dark_color_view');
                $('.app').classList.remove('green_color_view');
                $('.app').classList.remove('red_color_view');
            }
            if(index==1){
                $('.app').classList.remove('purple_color_view');
                $('.app').classList.remove('green_color_view');
                $('.app').classList.remove('red_color_view');
                $('.app').classList.add('dark_color_view');
            }
            if(index==2){
                $('.app').classList.remove('dark_color_view');
                $('.app').classList.remove('green_color_view');
                $('.app').classList.remove('red_color_view');
                $('.app').classList.add('purple_color_view');
            }
            if(index==3){
                $('.app').classList.remove('purple_color_view');
                $('.app').classList.remove('dark_color_view');
                $('.app').classList.remove('red_color_view');
                $('.app').classList.add('green_color_view');
            }
            if(index==4){
                $('.app').classList.remove('purple_color_view');
                $('.app').classList.remove('dark_color_view');
                $('.app').classList.remove('green_color_view');
                $('.app').classList.add('red_color_view');
            }
            
            // if(index ==1 || index==2 || index == 3 || index == 4){
                out_in_user_color.onclick = function (){
                    $('.app').classList.remove('purple_color_view');
                    $('.app').classList.remove('dark_color_view');
                    $('.app').classList.remove('green_color_view');
                    $('.app').classList.remove('red_color_view');
                    modal_themse.classList.remove('active');
            // }
            }
        }
    })

    // xử lý phần mobile và mobile khi click vào nút menu 
    const menu = $(".container_header--content_menu");
    menu.onclick = function (){
        menu.classList.toggle('active');
        $('.nav').classList.toggle('active_modile');
    }



    // -------------------------- Profile  ----------------------------

    // Xử lý phần otion --> đăng xuất trang 
    const logout = $('.container_profile--user_action--icon');
    logout.onclick = function (){
        logout.classList.add('active');
    }




    // Xử lý click tùy chọn các danh mục thiện
    const profile_playlists = $$('.container_profile--layout__playlist');
    const profile_ablum = $('.profile--layout__ablum');
    const profile_head_list = $$('.container_profile--head_list--item');


    profile_head_list.forEach((profile_head_list, index) => {
        profile_head_list.onclick = function (){
            $('.container_profile--head_list--item.active').classList.remove('active');
            this.classList.add('active');
            switch(index){
                    case 0:
                        // location.reload();

                        // Xử lý lick vào Dang mục bài hát thì chiều dài của thẻ max
                        $('.container_profile--layout__sum--foot_list').classList.remove('active_responsip');

                        $('.container_profile').style.display = 'none';
                        setTimeout(function(){
                            $('.container_profile').style.display = 'block';
                        },100)
                        profile_playlists[0].style.display = 'block';
                        profile_playlists[1].style.display = 'block';
                        $('.container_profile--layout__sum').style.display = 'block'
                        $('.container_profile--layout__sum--foot_img').style.display = 'block'
                        
                        //chỉnh sửa bài Hát
                        $('.container_profile--layout__sum--foot_list').style.width = '700px';
                        $('.container_profile--layout__sum--foot_list').style.height = '224px';
                        $('.container_profile--layout__sum--foot_list').style.marginBottom = '0';
                        $('.container_profile--layout__sum--foot_list').style.marginLeft = '20px';
                        $('.container_profile--layout__sum--foot').style.height = '244px';
                        
                        // chỉnh lại playlis
                        profile_playlists[0].style.marginTop= '50px';
                        
                        // chỉnh lại ablum
                        profile_playlists[1].style.marginTop= '50px';
                        $('.container_profile--layout').style.height = 'auto';

                        $('.container_profile--layout_art_one').style.display = 'none';   
                        $('.container_profile--layout_art_tow').style.display = 'none';   
                        $('.container_profile--layout_art_there').style.display = 'none'; 
                        break;

                    case 1:
                        setTimeout(function(){
                            // Xử lý lick vào Dang mục bài hát thì chiều dài của thẻ max
                            $('.container_profile--layout__sum--foot_list').classList.add('active_responsip');

                            $('.container_profile--layout__sum').style.display = 'block'
                            $('.container_profile--layout__sum--foot_img').style.display = 'none'
                            $('.container_profile--layout__sum--foot_list').style.width = '100%';
                            $('.container_profile--layout__sum--foot_list').style.height = '100%';
                            $('.container_profile--layout__sum--foot_list').style.marginBottom = '25px';
                            $('.container_profile--layout__sum--foot').style.height = '100%';
                            $('.container_profile--layout__sum--foot_list').style.margin = '0';
                            profile_playlists[0].style.display = 'none';
                            profile_playlists[1].style.display = 'none';
                            $('.container_profile--layout_art_one').style.display = 'none';   
                            $('.container_profile--layout_art_tow').style.display = 'none';   
                            $('.container_profile--layout_art_there').style.display = 'none'; 
                        },400)
                        break;

                    case 2: 
                    setTimeout(function(){
                        $('.container_profile--layout__sum').style.display = 'none'
                        profile_playlists[0].style.display = 'block';
                        profile_playlists[1].style.display = 'none';
                        $('.container_profile--layout').style.height = '380px';
                        profile_playlists[0].style.margin= '0';
                        $('.container_profile--layout_art_one').style.display = 'none';   
                        $('.container_profile--layout_art_tow').style.display = 'none';   
                        $('.container_profile--layout_art_there').style.display = 'none';   
                    },400)
                        break;

                    case 3:
                        setTimeout(function(){
                            $('.container_profile--layout__sum').style.display = 'none'
                            profile_playlists[0].style.display = 'none';
                            profile_playlists[1].style.display = 'none';
                            $('.container_profile--layout_art_one').style.display = 'flex';   
                            $('.container_profile--layout_art_tow').style.display = 'none';   
                            $('.container_profile--layout_art_there').style.display = 'none'; 
                            $('.container_profile--layout').style.height ='305px'; 
                        },400)
                        break;

                    case 4:
                        setTimeout(function(){
                            $('.container_profile--layout__sum').style.display = 'none'
                            profile_playlists[0].style.display = 'none';
                            profile_playlists[1].style.display = 'block';
                            profile_playlists[1].style.margin= '0';
                            $('.container_profile--layout').style.height = '625px';
                            $('.container_profile--layout_art_one').style.display = 'none';   
                            $('.container_profile--layout_art_tow').style.display = 'none';   
                            $('.container_profile--layout_art_there').style.display = 'none'; 
                        },400)
                        break;

                    case 5:
                        setTimeout(function(){
                            $('.container_profile--layout__sum').style.display = 'none'
                            profile_playlists[0].style.display = 'none';
                            profile_playlists[1].style.display = 'none';
                            $('.container_profile--layout_art_tow').style.display = 'flex';   
                            $('.container_profile--layout_art_one').style.display = 'none';   
                            $('.container_profile--layout_art_there').style.display = 'none'; 
                            $('.container_profile--layout').style.height ='305px'; 
                        },400)
                        break;
                    case 6:
                        setTimeout(function(){
                            $('.container_profile--layout__sum').style.display = 'none'
                            profile_playlists[0].style.display = 'none';
                            profile_playlists[1].style.display = 'none';
                            $('.container_profile--layout_art_there').style.display = 'flex';   
                            $('.container_profile--layout_art_one').style.display = 'none';   
                            $('.container_profile--layout_art_tow').style.display = 'none';   
                            $('.container_profile--layout').style.height ='305px'; 
                        },400)
                        break;
                }
        }
    })
    

    // Xử lý lick vào Dang mục bài hát thì chiều dài của thẻ max
    // const category_song = $$('.container_profile--head_list--item')[1];
    // category_song.onclick = function(){
    // }

    // Profile :xử lý animation chuyển động 
    const img_animate_first = $$('.container_profile--layout__sum--foot_img-item')[0];
    const img_animate_second = $$('.container_profile--layout__sum--foot_img-item')[1];
    const img_animate_third = $$('.container_profile--layout__sum--foot_img-item')[2];
    setTimeout(function(){
        setTimeout(function(){
            img_animate_first.classList.remove('second')
            img_animate_second.classList.remove('third')
            img_animate_third.classList.remove('first')

            img_animate_first.classList.add('first')
            img_animate_second.classList.add('second')
            img_animate_third.classList.add('third')
        },1000)
        setTimeout(function(){
            img_animate_first.classList.remove('first')
            img_animate_second.classList.remove('second')
            img_animate_third.classList.remove('third')

            img_animate_first.classList.add('third')
            img_animate_second.classList.add('first')
            img_animate_third.classList.add('second')
        },3000)
        setTimeout(function(){
            img_animate_first.classList.remove('third')
            img_animate_second.classList.remove('first')
            img_animate_third.classList.remove('second')
            
            img_animate_first.classList.add('second')
            img_animate_second.classList.add('third')
            img_animate_third.classList.add('first')
        },5000)
    },0)
    setInterval(function(){
        setTimeout(function(){
            img_animate_first.classList.remove('second')
            img_animate_second.classList.remove('third')
            img_animate_third.classList.remove('first')

            img_animate_first.classList.add('first')
            img_animate_second.classList.add('second')
            img_animate_third.classList.add('third')
        },1000)
        setTimeout(function(){
            img_animate_first.classList.remove('first')
            img_animate_second.classList.remove('second')
            img_animate_third.classList.remove('third')

            img_animate_first.classList.add('third')
            img_animate_second.classList.add('first')
            img_animate_third.classList.add('second')
        },3000)
        setTimeout(function(){
            img_animate_first.classList.remove('third')
            img_animate_second.classList.remove('first')
            img_animate_third.classList.remove('second')
            
            img_animate_first.classList.add('second')
            img_animate_second.classList.add('third')
            img_animate_third.classList.add('first')
        },5000)
    },6000)


    // Profile : xử lý khi di chuột thì hiện thanh croll
    const profile_lits = $('.container_profile--layout__sum--foot_list');

    profile_lits.onmouseover = function (){
        profile_lits.classList.add('active');
    }
    profile_lits.onmouseout = function (){
        profile_lits.classList.remove('active');
    }

    // -- xử lý zom ảnh 
    const slide_img = $$('.container_profile--layout__playlist--item_hear--img');
    for( var i = 0; i < slide_img.length; i++){
            slide_img[i].onmouseover = function (){
                this.classList.add('active');
            }
            slide_img[i].onmouseout = function (){
                this.classList.remove('active');
            }
    }

    // -------------------------- container body ----------------------------


    // Xử lý animation slider
    const item_animate_first = $$('.col .container_body--layout_slide_img img')[0];
    const item_animate_second = $$('.col .container_body--layout_slide_img img')[1];
    const item_animate_third = $$('.col .container_body--layout_slide_img img')[2];
    const item_animate_forth = $$('.col .container_body--layout_slide_img img')[3];
    const item_animate_five = $$('.col .container_body--layout_slide_img img')[4];
     item_animate_forth.style.display = 'none';
    item_animate_five.style.display = 'none'; 
    item_animate_forth.style.transform = 'translateX(-275%)'; 
    item_animate_five.style.transform = 'translateX(-275%)'; 

    
    setTimeout(() => {
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(55%)';  
            item_animate_first.style.display = 'none';  
            item_animate_second.style.transform = 'translateX(-110%)';  
            item_animate_third.style.transform = 'translateX(-110%)';  
            item_animate_forth.style.transform = 'translateX(-165%)'; 
            item_animate_five.style.transform = 'translateX(-220%)';
            setTimeout(function(){
                item_animate_five.style.display = 'block';
            },10)
            // item_animate_five.style.transform =  'rotate(270deg)';
        },3000)
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(165%)';  
            item_animate_second.style.transform = 'translateX(-55%)';  
            item_animate_second.style.display = 'none';  
            item_animate_third.style.transform = 'translateX(-220%)';  
            item_animate_forth.style.transform = 'translateX(-110%)'; 
            setTimeout(function(){
                item_animate_forth.style.display = 'block'; 
            },10)
            item_animate_five.style.transform = 'translateX(-330%)';  
        },6000)
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(220%)';  
            setTimeout(function(){
                item_animate_first.style.display = 'block';  
            },10)
            item_animate_second.style.transform = 'translateX(55%)';  
            item_animate_third.style.transform = 'translateX(-165%)';  
            item_animate_third.style.display = 'none';  
            item_animate_forth.style.transform = 'translateX(-220%)'; 
            item_animate_five.style.transform = 'translateX(-440%)';  
        },9000)
        setTimeout(() => {
                item_animate_first.style.transform = 'translateX(110%)'; 
                item_animate_second.style.transform = 'translateX(110%)';  
                setTimeout(function(){
                    item_animate_second.style.display = 'block'; 
                },10)
                item_animate_third.style.transform = 'translateX(-55%)';  
                item_animate_forth.style.transform = 'translateX(-330%)'; 
                item_animate_five.style.display = 'none'; 
                item_animate_five.style.transform = 'translateX(-385%)'; 
        },12000)
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(0)'; 
            item_animate_second.style.transform = 'translateX(0)'; 
            item_animate_third.style.transform = 'translateX(0)';  
            setTimeout(function(){ 
                item_animate_third.style.display = 'block';  
            },10)
            item_animate_forth.style.display = 'none';   
            item_animate_forth.style.transform = 'translateX(-275%)'; 
            item_animate_five.style.transform = 'translateX(-275%)'; 
        },15000)
    },0)
    setInterval(() => {
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(55%)';  
            item_animate_first.style.display = 'none';  
            item_animate_second.style.transform = 'translateX(-110%)';  
            item_animate_third.style.transform = 'translateX(-110%)';  
            item_animate_forth.style.transform = 'translateX(-165%)'; 
            item_animate_five.style.transform = 'translateX(-220%)';
            setTimeout(function(){
                item_animate_five.style.display = 'block';
            },10)
            // item_animate_five.style.transform =  'rotate(270deg)';
        },3000)
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(165%)';  
            item_animate_second.style.transform = 'translateX(-55%)';  
            item_animate_second.style.display = 'none';  
            item_animate_third.style.transform = 'translateX(-220%)';  
            item_animate_forth.style.transform = 'translateX(-110%)'; 
            setTimeout(function(){
                item_animate_forth.style.display = 'block'; 
            },10)
            item_animate_five.style.transform = 'translateX(-330%)';  
        },6000)
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(220%)';  
            setTimeout(function(){
                item_animate_first.style.display = 'block';  
            },10)
            item_animate_second.style.transform = 'translateX(55%)';  
            item_animate_third.style.transform = 'translateX(-165%)';  
            item_animate_third.style.display = 'none';  
            item_animate_forth.style.transform = 'translateX(-220%)'; 
            item_animate_five.style.transform = 'translateX(-440%)';  
        },9000)
        setTimeout(() => {
                item_animate_first.style.transform = 'translateX(110%)'; 
                item_animate_second.style.transform = 'translateX(110%)';  
                setTimeout(function(){
                    item_animate_second.style.display = 'block'; 
                },10)
                item_animate_third.style.transform = 'translateX(-55%)';  
                item_animate_forth.style.transform = 'translateX(-330%)'; 
                item_animate_five.style.display = 'none'; 
                item_animate_five.style.transform = 'translateX(-385%)'; 
        },12000)
        setTimeout(() => {
            item_animate_first.style.transform = 'translateX(0)'; 
            item_animate_second.style.transform = 'translateX(0)'; 
            item_animate_third.style.transform = 'translateX(0)';  
            setTimeout(function(){ 
                item_animate_third.style.display = 'block';  
            },10)
            item_animate_forth.style.display = 'none';   
            item_animate_forth.style.transform = 'translateX(-275%)'; 
            item_animate_five.style.transform = 'translateX(-275%)'; 
        },15000)
    },15000)
    


    // xử lý zom ảnh hiển icon của slider 
    const zom_img_slider = $$('.container_body--layout_list--item_img');
    zom_img_slider.forEach ((zom_img, index) =>{
        zom_img.onmouseover = function (){
            zom_img.classList.add('active');
        }
        zom_img.onmouseout = function (){
            zom_img.classList.remove('active');
        }
    }) 

    
    // xử lý click btn silder qua trái 
    // Muốn lướt sang trái hoặc sang phải một lần thì thêm class slider_half vào
    const btn_net_slider = $$('.container_body--layout_list .fas');

    btn_net_slider.forEach(function(btn, index){
        
        btn.onclick = function (){
            const click_parent = btn.parentNode.parentNode.parentNode;            
            const time_first = click_parent.querySelector('.container_body--layout_list--items.time_first');
            const time_first_second = click_parent.querySelector('.container_body--layout_list--items.time_first.time_second');
            const btn_first = click_parent.querySelectorAll('.fas')[0];
            const btn_second = click_parent.querySelectorAll('.fas')[1];
            const layout_list__items = click_parent.querySelector('.container_body--layout_list--items');
            
            // const time_first_half = click_parent.querySelector('.container_body--layout_list--items.slider_half');
            const layout_list__item_half = click_parent.querySelector('.container_body--layout_list--items.slider_half'); // kéo sáng phải và trái 1 lần
        
            if(index%2==0){                
                if(layout_list__item_half){
                    layout_list__item_half.classList.remove('time_first');
                    btn_first.classList.remove('active');
                    btn_second.classList.add('active');
                }else{
                      if(time_first_second){
                        layout_list__items.classList.remove('time_second');
                        btn_second.classList.add('active');
                        }else{
                            layout_list__items.classList.remove('time_first');
                            btn_first.classList.remove('active');
                        }
                }
                
            }
            else{
                    if(layout_list__item_half){
                        layout_list__item_half.classList.add('time_first');
                        btn_first.classList.add('active');
                        btn_second.classList.remove('active');
                    }else{
                        if(time_first){
                            layout_list__items.classList.add('time_second');
                            btn_second.classList.remove('active');
                        }
                        else{
                            layout_list__items.classList.add('time_first');
                            btn_first.classList.add('active');
                        }
                    }
            }
         }
         
        })


        const btn_icon_radio = $$('.slider_radio .fas');
        btn_icon_radio.forEach(function(btn, index){
        
            btn.onclick = function (){
                const click_parent = btn.parentNode;          
                const btn_first = click_parent.querySelectorAll('.fas')[0];
                const btn_second = click_parent.querySelectorAll('.fas')[1];
                
                const time_first_half = click_parent.querySelector('.container_body--layout_list--items.slider_half');
            
                if(index%2==0){                
                    if(time_first_half){
                        time_first_half.classList.remove('time_first');
                        btn_first.classList.remove('active');
                        btn_second.classList.add('active');
                    }
                }
                else{
                        if(time_first_half){
                            time_first_half.classList.add('time_first');
                            btn_first.classList.add('active');
                            btn_second.classList.remove('active');
                        }
                }
             }
             
            })
        

        
        // chuyển động slide user tự nhiên từ trái qua phải mà không cần phải click
        setInterval(function(){
            const layout_list_user =  $('.container_body--layout_list.slider_user')
            
            const autoslide = layout_list_user.querySelector('.container_body--layout_list--items.slider_user_img');
            const btn_first_user = $('.slider_user').querySelectorAll('.fas')[0];
            const btn_second_user = $('.slider_user').querySelectorAll('.fas')[1];

            const layout_list_release =  $('.container_body--layout_list.slider_release');
            const autoslide_release = layout_list_release.querySelector('.container_body--layout_list--items.slider_user_img');
            const btn_third_user = $('.slider_release').querySelectorAll('.fas')[0];
            const btn_four_user = $('.slider_release').querySelectorAll('.fas')[1];

            
            setTimeout(function(){
                autoslide.classList.add('time_first');
                btn_first_user.classList.add('active');

                autoslide_release.classList.add('time_first');
                btn_third_user.classList.add('active');
                },0)
                
                setTimeout(function(){
                    const user_first = layout_list_user.querySelector('.time_first');
                    if(user_first){
                        autoslide.classList.add('time_second');
                        btn_second_user.classList.remove('active');
                        }

                    const release_first = layout_list_release.querySelector('.time_first');
                    if(release_first){
                        autoslide_release.classList.add('time_second');
                        btn_four_user.classList.remove('active');
                        }
            },4000)
            
            setTimeout(function(){
                autoslide.classList.remove('time_second');
                btn_second_user.classList.add('active');

                autoslide_release.classList.remove('time_second');
                btn_four_user.classList.add('active');
            },8000)
            
            setTimeout(function(){
                const user_second = layout_list_user.querySelector('.time_second');
                if(!user_second){
                    autoslide.classList.remove('time_first');
                    btn_first_user.classList.remove('active');
                }

                const release_second = layout_list_user.querySelector('.time_second');
                if(!release_second){
                    autoslide_release.classList.remove('time_first');
                    btn_third_user.classList.remove('active');
                }
            },12000)

      },16000)

      
      // Chuyển động slider no category
      setInterval(function(){
        const no_slider_category = $('.slider_no_category .container_body--layout_list--items');      
        setTimeout(function(){
            no_slider_category.classList.add('time_first');
           },4000)
           
           setTimeout(function(){
            no_slider_category.classList.add('time_second');
        },8000)
        
        setTimeout(function(){
            no_slider_category.classList.remove('time_second');
       },12000)
       
       setTimeout(function(){
        no_slider_category.classList.remove('time_first');
        },16000)
     },16000)

          
      
        // Xử lý history khi click vào
        const click_history = $('.content_search_history');
        const search_history  = $('.container_header--content_search');
        const history_items = $('.container_header--content_search_history--items');
        const history_icon = $$('.container_header--content_search--icon')[0];
        history_items.onclick = function(){
            // Thông báo cho người dùng web chưa hoàn thiện
            search_history.classList.add('active_icon');
            setTimeout(function(){
                search_history.classList.remove('active_icon');
            },3000)
        }

        click_history.onblur = function (){
            // xét time out để onblur chạy sau  và history_items.onclick chạy trước
            setTimeout(() => {
                search_history.classList.remove('active');
            },125);
        }
        
        click_history.onclick = function(){
            search_history.classList.add('active');
        }

        history_icon.onclick = function (){
            search_history.classList.add('active_icon');
            setTimeout(function(){
                search_history.classList.remove('active_icon');
            },2500)
        }


    // --------------------------listen  ----------------------------


        // ====== Xử lý js trên mobile ======
        const listening_mobile = $('.listen_mobile--player_right');
        listening_mobile.onclick = function (){
            $('.listen').classList.remove('hion-on-mobile');
        }
        const No_listening = $('.media_title--iconMobile');
        No_listening.onclick = function (){
            $('.listen').classList.add('hion-on-mobile');
        }

        const heart_pc = $('.meadia_icon_more.heart');
        heart_pc.onclick  = function (){
            heart_pc.classList.toggle('active');
        }
       

    // Các bước làm tạo nhạc
    
  /*    1. Render songs 
        2.. Scroll top 
        3. Play / Pause / Seek
        4. CD rotate and
        5. Next / Prev 
        6. Random
        7. Nexr / Prev 
        8. Active song
        9. Scroll Active song into view
        10.Play song when click     
    */
    

    const players = $$('.controls_player--icon')[2];
    const playlist =  $('.container_profile--layout__sum--foot_list');

    const Name_music = $('.media_title--name');
    const media_author =  $('.media_title--author');
    const media_cd = $('.media_cd');
    const audio =  $('#audio');
    const time_range = $('.controls_time--range');
    const volume_change = $('#controls_lever_range');
    const next_song = $(".fas.fa-step-forward");
    const prev_song = $('.fas.fa-step-backward');
    const random_song = $('.fas.fa-random');
    const repeat_song = $('.fas.fa-redo');
    
    
    // khai bao biến cho mobile 
    const players_mobile = $$('.listen_mobile--player_left--icon')[1];
    const next_song_mobile = $$('.listen_mobile--player_left--icon')[2];

    var Music = {
        currenIndex : 0,
        isplaying : false,
        isRandom: false,
        isRepeat: false,
        a: 1,

        songs: [
                {
                    name: 'Cưới Đi',
                    singer_first: 'Masew',
                    singer_second: '',  
                    singer_third: '', 
                    path: './assets/music/song13.mp3',
                    image: './assets/img/image1.jpg',
                    time: '03.22'
                },
                {
                    name: 'Rời Tới Luôn',
                    singer_first: 'Nal', 
                    singer_second: '',    
                    singer_third: '', 
                    path: './assets/music/song12.mp3', 
                    image: './assets/img/image2.jpg',
                    time: '04.02'
                },
                {
                    name: 'Covid Nhanh Đi Đi',
                    singer_first: 'K-ICM, ', //song1    
                    singer_second: 'APJ, ', //song1    
                    singer_third: 'Huyền Thanh Môn', //song1
                    path: './assets/music/song11.mp3', 
                    image: './assets/img/image3.jpg',
                    time: '03.42'
                },
                {
                    name: 'Muộn Rồi Mà Sao Còn',
                    singer_first: 'Sơn Tùng M-TP',
                    singer_second: '', 
                    singer_third: '', 
                    path: './assets/music/song7.mp3',
                    image: './assets/img/image4.jpg',
                    time: '04.48'
                },
                {
                    name: 'What Are Words',
                    singer_first: 'Chris Medina',
                    singer_second: '',  
                    singer_third: '', 
                    path: './assets/music/song1.mp3', 
                    image: './assets/img/image5.jpg',
                    time: '03.12'
                },
                {
                    name: 'Lily',
                    singer_first: 'Alan Walker, ',
                    singer_second: 'K-391 ',  
                    singer_third: '', 
                    path: './assets/music/song2.mp3',
                    image: './assets/img/image6.jpg',
                    time: '03.16'
                },
                {
                    name: "We Don't Talk Anymore",
                    singer_first: 'Charlie Puth',
                    singer_second: '',  
                    singer_third: '', 
                    singer: 'Charlie Puth', //song 3
                    path: './assets/music/song3.mp3',
                    image: './assets/img/image7.jpg',
                    time: '03.50'
                },
                {
                    name: 'Shape Of You',
                    singer_first: 'Cover by J.Fla',
                    singer_second: '',  
                    singer_third: '', 
                    path: './assets/music/song4.mp3',
                    image: './assets/img/image8.jpg',
                    time: '02.53'
                },
                {
                    name: 'Thiên Đàng ft JOLIPOLI',
                    singer_first: 'WOWY',
                    singer_second: '',  
                    singer_third: '', 
                    path: './assets/music/song5.mp3',
                    image: './assets/img/image9.jpg',
                    time: '03.46'
                },
                {
                    name: 'Something Just Like',
                    singer_first: 'The Chainsmokers',
                    singer_second: '',  
                    singer_third: '', 
                    path: './assets/music/song6.mp3',
                    image: './assets/img/image10.jpg',
                    time: '06.36'
                },
                {
                    name: 'Monsters',
                    singer_first: 'Katie Sky',
                    singer_second: '',  
                    singer_third: '', 
                    path: './assets/music/song9.mp3',
                    image: './assets/img/image11.jpg',
                    time: '03.36'
                },
                {
                    name: 'Reality',
                    singer_first: 'Janieck Devy',
                    singer_second: '',  
                    singer_third: '',
                    path: './assets/music/song10.mp3',
                    image: './assets/img/image12.jpg',
                    time: '02.49'
                }
            ],



        render: function() {
           const htmls  = this.songs.map((song,index) =>{
               return `
               <li class="container_profile--layout__sum--foot_list--item ${index===this.currenIndex ? 'active' : ''} " data-index=${index}>
                    <div class="container_profile--layout__sum--foot_list--item_img" style="background-image: url('${song.image}')">
                        <i class="fas fa-play container_profile_icon"></i>
                    </div>
                    <div class="container_profile--layout__sum--foot_list--item_lable">
                        <span class="container_profile--layout__sum--foot_list--item_lable--title">${song.name}</span>
                        <span class="container_profile--layout__sum--foot_list--item_lable--info">
                            <a>${song.singer_first}</a>
                            <a>${song.singer_second}</a>
                            <a>${song.singer_third}</a>
                        </span>
                    </div>
                    <div class="container_profile--layout__sum--foot_list--item_time">
                        ${song.time}
                    </div>
                    <div class="container_profile--layout__sum--foot_list--item_more">
                        <a class="container_profile--layout__sum--foot_list--item_more-item hion-on-mobile-table">
                            <i class="fas fa-microphone "></i>
                        </a>
                        <a class="container_profile--layout__sum--foot_list--item_more-item active">
                            <i class="fas fa-heart "></i>
                            <!-- <i class="far fa-heart"></i> -->
                        </a>
                        <a class="container_profile--layout__sum--foot_list--item_more-item">
                            <i class="fas fa-ellipsis-h"></i>
                        </a>
                    </div>
                </li>
               `
           })
          playlist.innerHTML = htmls.join('');
        },


        defineProperties: function() {
            Object.defineProperty(this, 'currenSong',{
                get: function() {
                    return this.songs[this.currenIndex];
                }
            })
        },

        // lấy slider ảnh thứ 2
        define_img_first: function() {
            Object.defineProperty(this, 'currenSong_next_first',{
                get: function() {
                    if(this.currenIndex===11)
                        return this.songs[this.currenIndex - 11];
                    else
                        return this.songs[this.currenIndex + 1];
                }
            })
        },

        // lấy slider ảnh thứ 3
        define_img_second: function() {
            Object.defineProperty(this, 'currenSong_next_second',{
                get: function() {
                    if(this.currenIndex===10)
                        return this.songs[this.currenIndex - 10];
                    else if(this.currenIndex===11)
                        return this.songs[this.currenIndex - 10];
                    else
                        return this.songs[this.currenIndex + 2];
                }
            })
        },



        handEvents: function() {
            const scrooll  =  $('.container');

            scrooll.onscroll = function() {
                const srollTop_container = scrooll.scrollTop;
                if(srollTop_container==0){
                    $('.container_header').style.backgroundColor = 'transparent';
                    $('.container_header').style.boxShadow = 'none';
                }else{
                    $('.container_header').style.backgroundColor = 'var(--primary-color)';
                    $('.container_header').style.boxShadow = '0 3px 5px var(--sticky-header-box-shadow)';
                }

            }

        const _this = this;
        
            // xử lý cd quay 
            const media_cd_Animate = media_cd.animate([
                {
                    transform: 'rotate(360deg)'
                }
            ],{
                duration: 10000,
                iterations: Infinity,
            })
            media_cd_Animate.pause();

    

            // Xử lý khi click vào phát nhạc
            players.onclick = function (){
                if(_this.isplaying){
                    audio.pause();
                }else{
                    audio.play();
                }
            }

              // Xử lý khi click vào phát nhạc trên mobile
            players_mobile.onclick = function (){
                if(_this.isplaying){
                    audio.pause();
                }else{
                    audio.play();
                }
            }
        

            // khi được play
            audio.onplay = function() {
                players.classList.add('active_player');
                players_mobile.classList.add('active');
                _this.isplaying = true;
                media_cd_Animate.play();
            }

            // khi được pause
            audio.onpause = function (){
                players.classList.remove('active_player');
                players_mobile.classList.remove('active');
                _this.isplaying = false;
                media_cd_Animate.pause();
            }
            


            // khi tiến độ bài hát thay đổi khi
            audio.ontimeupdate = function () {
                const time_start = $('.controls_time--right');
                const time_count = $('.controls_time--left');
                
                if(audio.duration){
                    const time_percent = Math.floor((audio.currentTime / audio.duration) *100);
                    time_range.value = time_percent;

                    // trên mobile
                    const time_percent_mobile = $('.controls_time--range_mobile');
                   time_percent_mobile.value = time_percent;

                    // Xử lý tính thời gian của bài hát  
                    var e = Math.floor(audio.currentTime) ;
                    var d = e%60;
                    var b =  Math.floor(e/60);
                    if(d<10){
                       var c=0;
                    }else{
                        c="";
                    }
                    time_start.textContent = '0' + b +  ":" + c + d;

                    var ee= Math.floor( audio.duration) ;
                    var dd = ee%60;
                    var bb =  Math.floor(ee/60);
                    if(dd<10){
                       var cc=0;
                    }else{
                        cc="";
                    }

                    time_count.innerHTML =  '0' + bb +  ":" + cc + dd;

                }
            }

            // xử lý khi tua bài hát nhạc
            time_range.oninput = function(e){
                const seek_time = ((e.target.value/100)*audio.duration)
                audio.currentTime = seek_time;
                audio.play();
            }

            // xử lý âm thanh bài hát 
            volume_change.oninput = function(e){
                audio.volume = e.target.value/100;
            }

            // Xử lý next bài hát
            next_song.onclick = function (){
                if(_this.isRandom){
                    _this.playRandomSong();
                }else{
                    _this.nextSong();
                }
                audio.play();
                _this.render();
                _this.scrollToactiveSong();
            }

            
            // Xử lý next bài hát cho mobile 
            next_song_mobile.onclick = function (){
                if(_this.isRandom){
                    _this.playRandomSong();
                }else{
                    _this.nextSong();
                }
                audio.play();
                _this.render();
                _this.scrollToactiveSong();
            }

            // xử lý click quay lại bài hát 
            prev_song.onclick = function (){
                if(_this.isRandom){
                    _this.playRandomSong();
                }else{
                    _this.prevSong();
                }
                audio.play();
                _this.render();
                _this.scrollToactiveSong();
            }

        

            // chức năn bật tắt random bài hát 
            random_song.onclick  = function (){
                _this.isRandom = !_this.isRandom;
                this.parentNode.classList.toggle('active_redo', _this.isRandom );
            }           

            // xử lý quay lại bài hát đó 
            repeat_song.onclick = function (){
                _this.isRepeat = !_this.isRepeat;
                this.parentNode.classList.toggle('active_redo', _this.isRepeat);
            }
            
            // xử lý next song khi audio end( bài hát kết thúc)
            audio.onended = function () {
                if(_this.isRepeat)
                    audio.play();
                else
                    next_song.click();
            }
            // lắng nghe hành vi vào play list, kích trúng cái nào thì trả về cái đó
            playlist.onclick = function (e) {

                const songNode = e.target.closest('.container_profile--layout__sum--foot_list--item:not(.active)');
                if(songNode
                    || e.target.closest('.container_profile--layout__sum--foot_list--item_more-item')
                ){
                    // Xử lý click vào song 
                    if(songNode){
                        _this.currenIndex  = Number(songNode.dataset.index);
                        // console.log(songNode.getAttribute('data-index'));
                        setTimeout(function(){

                        })
                        _this.loadCrurentSong();
                        audio.play();
                        _this.render();
                    }

                    // Xử lý các nút more 
                    if(e.target.closest('.container_profile--layout__sum--foot_list--item_more-item')){
                        
                    }

                  
                }

            }

       },

       loadCrurentSong: function (){
           const slider_image = $$('.container_profile--layout__sum--foot_img-item');
            Name_music.textContent = this.currenSong.name;
            media_author.textContent = this.currenSong.singer_first + this.currenSong.singer_second + this.currenSong.singer_third;
            media_cd.style.backgroundImage = `url(${this.currenSong.image})`
            audio.src = this.currenSong.path;

            slider_image[0].style.backgroundImage = `url(${this.currenSong.image})`
            slider_image[1].style.backgroundImage = `url(${this.currenSong_next_first.image})`
            slider_image[2].style.backgroundImage = `url(${this.currenSong_next_second.image})`


            // Load song cho mobile : 
           const Name_music_mobile = $('.listen_mobile--player_right--song_name');
           const author_mobile  = $('.listen_mobile--player_right--authur');
           const img_mobile = $('.listen_mobile--player_right--img')
           Name_music_mobile.textContent = this.currenSong.name;
           author_mobile.textContent = this.currenSong.singer_first + this.currenSong.singer_second + this.currenSong.singer_third;
           img_mobile.style.backgroundImage = `url(${this.currenSong.image})`;
       },

       nextSong: function() {
            this.currenIndex++; 
            if(this.currenIndex === this.songs.length){
                this.currenIndex = 0;
            }
            this.loadCrurentSong();
       },

       prevSong: function(){
            this.currenIndex--; 
            if(this.currenIndex < 0){
                this.currenIndex = this.songs.length - 1;
            }
            this.loadCrurentSong();
       },
       
       playRandomSong: function(){
           let newIndex;
            do{
                newIndex = Math.floor(Math.random() * this.songs.length);
            }while(newIndex==this.currenIndex)
            this.currenIndex = newIndex;
            this.loadCrurentSong();
       },

       scrollToactiveSong: function() {
           setTimeout(function() {
               if(this.currenIndex==0){
                    $('.container_profile--layout__sum--foot_list--item.active').scrollIntoView({
                        behaviour: 'smooth',
                        block: 'end', 
                    });
               }else{
                   $('.container_profile--layout__sum--foot_list--item.active').scrollIntoView({
                       behaviour: 'smooth',
                       block: 'nearest', 
                   });
               }
           },300)
       },

       start: function(){
           // lắng nghe xử lý các sự kiện 
           this.handEvents();

           // định nghĩa các thuốc tính Object 
            this.defineProperties();
            this.define_img_first();
            this.define_img_second();


            // Tải thông tin bài hát đầu tiên khi chạy ứng dụng 
            this.loadCrurentSong();

            // render playlist
            this.render();
        },

     
    }

    Music.start();
