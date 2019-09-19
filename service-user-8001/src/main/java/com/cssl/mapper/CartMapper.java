package com.cssl.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.cssl.entity.Cart;

import java.util.List;
import java.util.Map;

/**
 * <p>
 *  Mapper 接口
 * </p>
 *
 * @author lx
 * @since 2019-09-10
 */
public interface CartMapper extends BaseMapper<Cart> {

  List<Map> cartAllGoodsByUserId(Integer userId);

  Integer cartCount(Integer userId);

  int updateCartNum(Map map);

}
