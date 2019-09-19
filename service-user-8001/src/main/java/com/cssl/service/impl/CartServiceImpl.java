package com.cssl.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.cssl.entity.Cart;
import com.cssl.mapper.CartMapper;
import com.cssl.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  服务实现类
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
@Service
@Transactional
public class CartServiceImpl extends ServiceImpl<CartMapper, Cart> implements CartService {

    @Autowired
    private CartMapper cartMapper;

    @Override
    public List<Map> cartAllGoodsByUserId(Integer userId) {
        return cartMapper.cartAllGoodsByUserId(userId);
    }

    @Override
    public Integer cartCount(Integer userId) {
        return cartMapper.cartCount(userId);
    }

    @Override
    public int updateCartNum(Map map) {
        return cartMapper.updateCartNum(map);
    }
}
