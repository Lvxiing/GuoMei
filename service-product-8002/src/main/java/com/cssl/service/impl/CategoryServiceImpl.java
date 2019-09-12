package com.cssl.service.impl;

import com.cssl.entity.Category;
import com.cssl.mapper.CategoryMapper;
import com.cssl.service.CategoryService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
public class CategoryServiceImpl extends ServiceImpl<CategoryMapper, Category> implements CategoryService {
    @Autowired
    private CategoryMapper categoryMapper;

    @Override
    public List<Category> findCategory(Map<String,Object> map) {
        return categoryMapper.findCategory(map);
    }

    @Override
    public Category findCategoryParent(Integer parentId) {
        return categoryMapper.findCategoryParent(parentId);
    }

    @Override
    public int updateCategoryInfo(Category category) {
        return categoryMapper.updateCategoryInfo(category);
    }

    @Override
    public List<Map<String, Object>> findTreeCategory(Integer cLevel) {
        return categoryMapper.findTreeCategory(cLevel);
    }

    @Override
    public List<Map<String, Object>> findCategoryAndParentExist() {
        return categoryMapper.findCategoryAndParentExist();
    }

    @Override
    public int deleteCategory(Integer cid) {
        return categoryMapper.deleteCategory(cid);
    }

    @Override
    public int brandExistGood(Integer cid) {
        return categoryMapper.brandExistGood(cid);
    }

    @Override
    public int deleteBrand(Integer cid) {
        return categoryMapper.deleteBrand(cid);
    }

    @Override
    public int addCategory(Category category) {
        return categoryMapper.addCategory(category);
    }

    @Override
    public int selectBrandId(Integer cid) {
        return categoryMapper.selectBrandId(cid);
    }

    @Override
    public Map findBrandIsParentCategory(Integer id) {
        return categoryMapper.findBrandIsParentCategory(id);
    }

}
